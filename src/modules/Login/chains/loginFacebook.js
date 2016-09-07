import {set, copy} from 'cerebral/operators';
import {PAGE_CHAT_LIST} from '~/constants';
import facebookLogin from '../actions/facebookLogin.js';
import saveFirebaseUser from '../actions/saveFirebaseUser.js';

const loginFacebook = [
  set('state:login.is_loading', true),
  facebookLogin, {
    success: [
      set('state:login.is_logged', true),
      copy('input:user', 'state:login.user'),
      set('state:login.last_login_at', (new Date()).getTime()),
    ],
    error: [
      set('state:login.is_logged', false),
      copy('input:code', 'state:login.error_code'),
      copy('input:message', 'state:login.error_message'),
    ]
  },
  saveFirebaseUser, {
    success: [
    ],
    error: [
      copy('input:code', 'state:login.error_code'),
      copy('input:message', 'state:login.error_message'),
    ]
  },
  set('state:main.current_page', PAGE_CHAT_LIST),
  set('state:login.is_loading', false),
];

export default loginFacebook;
