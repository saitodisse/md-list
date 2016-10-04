// my_queue_worker.js

const Queue = require('firebase-queue');
const firebase = require('firebase');
const path = require('path');

firebase.initializeApp({
  serviceAccount: path.resolve(process.env.FIREBASE_CRED_JSON_PATH),
  databaseURL: process.env.DATABASE_URL
});

const ref = firebase.database().ref('queue');

// Creates the Queue
new Queue(ref, {
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

// Creates the Queue
new Queue(ref, {
  specId: 'task_2',
  numWorkers: 10
}, (data, progress, resolve, reject) => {
  // Read and process task data
  console.log(`task_2: ${JSON.stringify(data, null, 2)}`);

  // Finish the task
  setTimeout(() => resolve({
    number: data.number * 10
  }), 120);
});

new Queue(ref, {
  specId: 'task_3',
  numWorkers: 10
}, (data, progress, resolve, reject) => {
  // Read and process task data
  console.log(`task_3: ${JSON.stringify(data, null, 2)}`);

  // Finish the task
  setTimeout(() => resolve({
    number: data.number / 2
  }), 120);
});

new Queue(ref, {
  specId: 'task_4',
  numWorkers: 10
}, (data, progress, resolve, reject) => {
  // Read and process task data
  console.log(`task_4: ${JSON.stringify(data, null, 2)}`);

  // Finish the task
  setTimeout(() => resolve(), 120);
});

// process.on('SIGINT', () => {
//   console.log('Starting queue shutdown');
//   queue.shutdown().then(() => {
//     console.log('Finished queue shutdown');
//     process.exit(0);
//   });
// });