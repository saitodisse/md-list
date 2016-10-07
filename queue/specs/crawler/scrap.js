const firebase = require('firebase');
const ref = firebase.database().ref('queue');
const Queue = require('firebase-queue');
const Crawler = require('crawler');

const save_to_firebase = ({ job_name, url }, body) => {
  return new Promise((resolve, reject) => {
    const itemsRef = firebase.database().ref('crawler/body_results');
    const key = itemsRef.push().key;
    const updates = {};

    const data = {
      id: key,
      body,
      job_name,
      url,
      created_at: firebase.database.ServerValue.TIMESTAMP,
    };

    updates[key] = data;

    return itemsRef.update(updates)
      .then(() => {
        return resolve(data);
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
      save_to_firebase(data, body)
        .then(({id, job_name, url}) => {
          console.info(`[finished] ${data.job_name}`);
          console.info(` - ${job_name}`);
          console.info(` - ${url}`);
          console.info(` - ${id}\n`);
          return resolve({
            key: id,
            body,
          });
        })
        .catch((err) => {
          console.error(err)
          reject({ crawler_error: err });
        });
    },
  });
  console.info(`[start] ${data.job_name}`);
  c.queue(data.url);
});

process.on('SIGINT', () => {
  console.log('Starting queue shutdown');
  queue.shutdown().then(() => {
    console.log('Finished queue shutdown');
    process.exit(0);
  });
});
