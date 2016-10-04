const firebase = require('firebase');
const path = require('path');

firebase.initializeApp({
  serviceAccount: path.resolve(process.env.FIREBASE_CRED_JSON_PATH),
  databaseURL: process.env.DATABASE_URL
});

const ref = firebase.database().ref('queue');

// Add tasks onto the queue
let number = 1;
setTimeout(() => {
  setInterval(() => {
    console.log(`\nSEND: pushing ${number}\n`);
    number = ++number;
    if (number % 3 === 0) {
      ref.child('tasks').push({
        _state: 'spec_multiply_by_10',
        number
      });
    } else {
      ref.child('tasks').push({
        _state: 'spec_check_odd_number',
        number
      });
    }
  }, 1000);
}, 5000);
