const firebase = require('firebase');
const ref = firebase.database().ref('queue');
const Queue = require('firebase-queue');

const queue = new Queue(ref, {
  specId: 'check_odd_number',
  numWorkers: 3
}, (data, progress, resolve, _reject) => {

  if (data.number % 2 === 1) {
    resolve({ number: data.number });
  } else {
    resolve(null);
  }
});

process.on('SIGINT', () => {
  console.log('Starting queue shutdown');
  queue.shutdown().then(() => {
    console.log('Finished queue shutdown');
    process.exit(0);
  });
});
