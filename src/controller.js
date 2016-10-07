import { Controller } from 'cerebral';
import Model from 'cerebral/models/immutable';
import Http from 'cerebral-module-http';
import Devtools from 'cerebral-module-devtools';
import Router from 'cerebral-module-router';
import Notifications from './modules/Notifications';
import Search from './modules/Search';
import Main from './modules/Main';
import Login from './modules/Login';
import ChatList from './modules/ChatList';
import Configuration from './modules/Configuration';
import Members from './modules/Members';
import Jobs from './modules/Crawler/Jobs';
import FirebaseModule from 'cerebral-module-firebase';

export const modules = {
  // app modules
  main: Main,
  login: Login,
  chatList: ChatList,
  configurations: Configuration,
  search: Search,

  // Crawler
  jobs: Jobs,

  members: Members,

  // services
  devtools: process.env.NODE_ENV === 'production' ? () => {} : Devtools(),

  router: Router({
    '/login': 'main.redirectedToLogin',
    '/config': 'main.redirectedToConfiguration',
    '/members': 'main.redirectedToMembers',
    '/search': 'main.redirectedToSearch',
    '/jobs': 'main.redirectedToJobs',
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

  http: Http({
    baseUrl: process.env.ELASTIC_SEARCH_URI,
    cors: true,
    headers: {
      'Content-Type': 'application/json'
    },
  }),

  notifications: Notifications(),
};

const init_controller = () => {
  const modelOptions = process.env.NODE_ENV === 'production' ? {
    immutable: false // Do not set this to false when using the Recorder
  } : {};
  const controller = Controller(Model({}, modelOptions));
  controller.addModules(modules);
  return controller;
};

export default init_controller;
