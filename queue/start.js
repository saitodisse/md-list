const firebase = require('firebase');
const path = require('path');

console.info('firebase.initializeApp\n');

firebase.initializeApp({
  serviceAccount: path.resolve(process.env.FIREBASE_CRED_JSON_PATH),
  databaseURL: process.env.DATABASE_URL
});

require('./specs');

