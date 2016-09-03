import {set, copy} from 'cerebral/operators';
import getUser from '../actions/getUser.js';

export default [
  set('state:login.is_loading', true),
  getUser, {
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
  set('state:login.is_loading', false),
];