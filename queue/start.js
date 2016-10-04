// my_queue_worker.js

const Queue = require('firebase-queue');
const firebase = require('firebase');
const path = require('path');

firebase.initializeApp({
  serviceAccount: path.resolve(process.env.FIREBASE_CRED_JSON_PATH),
  databaseURL: process.env.DATABASE_URL
});

const ref = firebase.database().ref('queue');

require('./specs/multiply')(ref);
