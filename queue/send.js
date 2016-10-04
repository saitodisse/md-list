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
    finished_state: 'task_2_finished',
    timeout: 10000
  },
  task_3: {
    start_state: 'task_2_finished',
    in_progress_state: 'task_3_in_progress',
    finished_state: 'task_3_finished',
    timeout: 10000
  },
  task_4: {
    start_state: 'task_3_finished',
    in_progress_state: 'task_4_in_progress',
    finished_state: 'task_4_finished',
    timeout: 10000
  }
});

// Add tasks onto the queue
var taskNumber = 0;
setInterval(function() {
  const new_number = ++taskNumber;
  console.log(`pushing ${new_number}`);
  ref.child('tasks').push({
    taskNumber: new_number
  });
}, 500);

