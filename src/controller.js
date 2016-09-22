import {Controller} from 'cerebral';
import Model from 'cerebral/models/immutable';
import Http from 'cerebral-module-http';
import Devtools from 'cerebral-module-devtools';
import Router from 'cerebral-module-router';

import Notifications from './modules/Notifications';
import Main from './modules/Main';
import Login from './modules/Login';
import ChatList from './modules/ChatList';
import Configuration from './modules/Configuration';

import FirebaseModule from 'cerebral-module-firebase';
// import FirebaseModule from '../../cerebral-module-firebase/build/index.js';

const modelOptions = process.env.NODE_ENV === 'production' ? {
  immutable: false // Do not set this to false when using the Recorder
} : {};
const controller = Controller(Model({}, modelOptions));

controller.addModules({
  // app modules
  main: Main,
  login: Login,
  chatList: ChatList,
  configuration: Configuration,

  // services
  http: Http({
    baseUrl: '/api',
    headers: {
      'Content-Type': 'application/json'
    },
  }),

  devtools: process.env.NODE_ENV === 'production' ? () => {} : Devtools(),

  router: Router({
    '/login': 'main.redirectedToLogin',
    '/config': 'main.redirectedToConfiguration',
    '/': 'main.redirectedToChatList',
  }, {
    onlyHash: true
  }),

  firebase: FirebaseModule({
    config: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      databaseURL: process.env.DATABASE_URL,
      storageBucket: process.env.STORAGE_BUCKET,
    },
  }),

  notifications: Notifications(),

});

export default controller;
