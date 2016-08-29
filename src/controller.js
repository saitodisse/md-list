import {Controller} from 'cerebral';
import Model from 'cerebral/models/immutable';
import Http from 'cerebral-module-http';
import Devtools from 'cerebral-module-devtools';
import Router from 'cerebral-module-router';

import Main from './modules/Main';
import Login from './modules/Login';
import ListApp from './modules/ListApp';

const controller = Controller(Model({}));

controller.addModules({
  // listApp module
  main: Main,

  // login module
  login: Login,

  // listApp module
  listApp: ListApp,

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

});

export default controller;
