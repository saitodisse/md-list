const firebase = require('firebase');
const ref = firebase.database().ref('queue');
const Queue = require('firebase-queue');

const queue = new Queue(ref, {
  specId: 'print_number',
  numWorkers: 10
}, (data, progress, resolve, _reject) => {
  // Read and process task data
  console.log(`Final Number * 10 = ${data.number}`);

  // Finish the task
  setTimeout(() => resolve(null), 120);
});

process.on('SIGINT', () => {
  console.log('Starting queue shutdown');
  queue.shutdown().then(() => {
    console.log('Finished queue shutdown');
    process.exit(0);
  });
});
