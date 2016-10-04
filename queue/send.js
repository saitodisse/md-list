// my_queue_worker.js

var firebase = require('firebase');
const path = require('path');

firebase.initializeApp({
  serviceAccount: path.resolve(process.env.FIREBASE_CRED_JSON_PATH),
  databaseURL: process.env.DATABASE_URL
});

var ref = firebase.database().ref('queue');

ref.child('specs').set({
  task_1: {
    in_progress_state: 'task_1_in_progress',
    finished_state: 'task_1_finished',
    timeout: 10000
  },
  task_2: {
    start_state: 'task_1_finished',
    in_progress_state: 'task_2_in_progress',
    finished_state: null,
    timeout: 10000
  },
});

// Add tasks onto the queue
var taskNumber = 0;
setInterval(function() {
  const new_number = ++taskNumber;
  console.log(`\nSEND: pushing ${new_number}\n`);
  ref.child('tasks').push({
    taskNumber: new_number
  });
}, 3000);

