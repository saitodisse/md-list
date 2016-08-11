import {Controller} from 'cerebral';
import Model from 'cerebral/models/immutable';
import Devtools from 'cerebral-module-devtools';
import Http from 'cerebral-module-http';
import ListApp from './modules/ListApp';

const controller = Controller(Model({}));

controller.addModules({
  // app namespace
  listApp: ListApp,

  // service
  http: Http({
    baseUrl: '/api',
    headers: {
      'Content-Type': 'application/json'
    },
  }),

  // plug-in
  devtools: Devtools()
});

export default controller;
