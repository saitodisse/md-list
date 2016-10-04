const Queue = require('firebase-queue');
const firebase = require('firebase');

module.exports = function task_2 (ref) {
  const queue = new Queue(ref, {
    specId: 'task_2',
    numWorkers: 10
  }, (data, progress, resolve, reject) => {
    // Read and process task data
    console.log(`task_2: ${JSON.stringify(data, null, 2)}`);

    // Finish the task
    setTimeout(() => resolve(), 120);
  });

  process.on('SIGINT', () => {
    console.log('Starting queue shutdown');
    queue.shutdown().then(() => {
      console.log('Finished queue shutdown');
      process.exit(0);
    });
  });
};
