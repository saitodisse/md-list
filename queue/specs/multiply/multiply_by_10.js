const firebase = require('firebase');
const ref = firebase.database().ref('queue');
const Queue = require('firebase-queue');

const queue = new Queue(ref, {
  specId: 'multiply_by_10',
  numWorkers: 10
}, (data, progress, resolve) => {
  // Do some work
  let percentageComplete = 0;
  const interval = setInterval(() => {
    percentageComplete += 20;
    console.log({percentageComplete}); // DEBUG
    if (percentageComplete >= 100) {
      clearInterval(interval);
      // Finish the task
      resolve({
        number: data.number * 10
      });
    } else {
      progress(percentageComplete);
    }
  }, 100);
});

process.on('SIGINT', () => {
  console.log('Starting queue shutdown');
  queue.shutdown().then(() => {
    console.log('Finished queue shutdown');
    process.exit(0);
  });
});
