const Queue = require('firebase-queue');
const firebase = require('firebase');

module.exports = function task_1 (ref) {
  const queue = new Queue(ref, {
    specId: 'task_1',
    numWorkers: 10
  }, (data, progress, resolve, reject) => {
    // Read and process task data
    console.log(`task_1: ${JSON.stringify(data, null, 2)}`);

    // Do some work
    let percentageComplete = 0;
    const interval = setInterval(() => {
      percentageComplete += 20;
      if (percentageComplete >= 1) {
        clearInterval(interval);
      } else {
        progress(percentageComplete);
      }
    }, 10);

    // Finish the task
    setTimeout(() => resolve({
      number: data.taskNumber * 10
    }), 120);
  });

  process.on('SIGINT', () => {
    console.log('Starting queue shutdown');
    queue.shutdown().then(() => {
      console.log('Finished queue shutdown');
      process.exit(0);
    });
  });
};
