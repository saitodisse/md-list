import {Controller} from 'cerebral';
import Model from 'cerebral/models/immutable';
import Http from 'cerebral-module-http';
import Devtools from 'cerebral-module-devtools';
import Router from 'cerebral-module-router';

import Main from './modules/Main';
import Login from './modules/Login';
import ListApp from './modules/ListApp';
import Chat from './modules/Chat';

import FirebaseModule from 'cerebral-module-firebase';

const controller = Controller(Model({}));

controller.addModules({
  // listApp module
  main: Main,

  // login module
  login: Login,

  // listApp module
  listApp: ListApp,

  // listApp module
  chat: Chat,

  // service
  http: Http({
    baseUrl: '/api',
    headers: {
      'Content-Type': 'application/json'
    },
  }),

  // plug-in
  devtools: Devtools(),

  router: Router({
    '/login': 'main.redirectToLogin',
    '/list': 'main.redirectToList',
    '/': 'main.redirectToMain',
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
    // When using tasks and firebase queue you can prefix
    // the specs triggered. This is useful in development
    // when multiple developers are working against the
    // same instance
    // specPrefix: 'MD'
  })

});

export default controller;
