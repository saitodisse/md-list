import {set, copy} from 'cerebral/operators';
import facebookLogin from '../actions/facebookLogin.js';
import listenSomeData from '../actions/firebase/listenSomeData.js';

export default [
  set('state:login.is_loading', true),
  facebookLogin, {
    success: [
      set('state:login.is_logged', true),
      copy('input:user', 'state:login.user'),
    ],
    error: [
      set('state:login.is_logged', false),
      copy('input:code', 'state:login.error_code'),
      copy('input:message', 'state:login.error_message'),
    ]
  },
  listenSomeData,
  set('state:login.is_loading', false),
];
