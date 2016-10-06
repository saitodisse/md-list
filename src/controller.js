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
import Jobs from './modules/Jobs';
import Executions from './modules/Executions';
import Body_Results from './modules/Body_Results';
import JSON_Extrations from './modules/JSON_Extrations';
import Markdown_Conversions from './modules/Markdown_Conversions';
import SetStates from './modules/SetStates';
import FirebaseModule from 'cerebral-module-firebase';

const modelOptions = process.env.NODE_ENV === 'production' ? {
  immutable: false // Do not set this to false when using the Recorder
} : {};
const controller = Controller(Model({}, modelOptions));

controller.addModules({
  // app modules
  main: Main,
  login: Login,
  chatList: ChatList,
  configurations: Configuration,
  search: Search,

  // Crawler
  jobs: Jobs,
  executions: Executions,
  body_results: Body_Results,
  json_extrations: JSON_Extrations,
  markdown_conversions: Markdown_Conversions,

  // for debugging components
  set_states: SetStates(controller),

  members: Members,

  // services
  devtools: process.env.NODE_ENV === 'production' ? () => {
  } : Devtools(),

  router: Router({
    '/login': 'main.redirectedToLogin',
    '/config': 'main.redirectedToConfiguration',
    '/members': 'main.redirectedToMembers',
    '/search': 'main.redirectedToSearch',
    '/jobs': 'main.redirectedToJobs',
    '/executions': 'main.redirectedToExecutions',
    '/body_results': 'main.redirectedToBody_Results',
    '/json_extrations': 'main.redirectedToJSON_Extrations',
    '/markdown_conversions': 'main.redirectedToMarkdown_Conversions',
    '/set_states': 'main.redirectedToSetStates',
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

});

export default controller;
