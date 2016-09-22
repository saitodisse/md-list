import {set, copy} from 'cerebral/operators';
import getUser from '../actions/getUser.js';
import notificationRequestPermition from '../actions/notificationRequestPermition.js';
import getFirebaseUser from '../actions/getFirebaseUser.js';
import saveFirebaseUser from '../actions/saveFirebaseUser.js';

const bootstrap = [
  set('state:login.is_loading', true),

  getUser, {
    success: [
      set('state:login.is_logged', true),
      copy('input:user', 'state:login.user'),
      set('state:login.last_login_at', (new Date()).getTime()),
      // send user to firebase
      getFirebaseUser, {
        success: [
          // existent user
        ],
        error: [
          copy('input:code', 'state:login.error_code'),
          copy('input:message', 'state:login.error_message'),
          // firebase: Permission Denied
          //           lets save to "users" on firebase
          saveFirebaseUser, {
            success: [
              set('state:login.user_saved', true),
            ],
            error: [
              copy('input:code', 'state:login.error_code'),
              copy('input:message', 'state:login.error_message'),
            ]
          },
        ]
      },
    ],
    error: [
      set('state:login.is_logged', false),
      copy('input:code', 'state:login.error_code'),
      copy('input:message', 'state:login.error_message'),
    ]
  },

  notificationRequestPermition, {
    default: [
      set('state:login.notifications_enabled', null),
      copy('input:notification_result', 'state:login.notification_result'),
    ],
    granted: [
      set('state:login.notifications_enabled', true),
      copy('input:notification_result', 'state:login.notification_result'),
    ],
    denied: [
      set('state:login.notifications_enabled', false),
      copy('input:notification_result', 'state:login.notification_result'),
    ],
    error: [
      copy('input:code', 'state:login.error_code'),
      copy('input:message', 'state:login.error_message'),
    ]
  },

  set('state:login.is_loading', false),
];

export default bootstrap;
