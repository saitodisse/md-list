const firebase = require('firebase');
const ref = firebase.database().ref('queue');
const Queue = require('firebase-queue');
const Crawler = require('crawler');

const save_to_firebase = (body_scraped) => {
  return new Promise((resolve, reject) => {
    const itemsRef = firebase.database().ref('crawler/body_results');
    const key = itemsRef.push().key;
    const updates = {};

    updates[ `${key}` ] = {
      body_result_id: key,
      body: body_scraped,
      created_at: firebase.database.ServerValue.TIMESTAMP,
    };

    return itemsRef.update(updates)
      .then(() => {
        return resolve(key);
      });
  });
};

const queue = new Queue(ref, {
  specId: 'crawler_web_page',
  numWorkers: 5
}, (data, progress, resolve, reject) => {
  const c = new Crawler({
    maxConnections: 5,
    skipDuplicates: true,
    callback: (crawler_error, crawler_result, crawler_$) => {
      if (crawler_error) {
        return reject({ crawler_error });
      }

      const body = crawler_result.body;
      save_to_firebase(body)
        .then((firebase_key) => {
          return resolve({
            key: firebase_key,
            body,
          });
        })
        .catch((err) => {
          reject({ crawler_error: err });
        });
    },
  });
  c.queue(data.url);
});

process.on('SIGINT', () => {
  console.log('Starting queue shutdown');
  queue.shutdown().then(() => {
    console.log('Finished queue shutdown');
    process.exit(0);
  });
});
