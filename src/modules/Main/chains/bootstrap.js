import {set, copy} from 'cerebral/operators';
import getUser from '../actions/getUser.js';
import notificationRequestPermition from '../actions/notificationRequestPermition.js';
import getFirebaseUser from '../actions/getFirebaseUser.js';
import getFirebaseGlobalConfigurations from '../actions/getFirebaseGlobalConfigurations.js';
import getFirebaseUserConfigurations from '../actions/getFirebaseUserConfigurations.js';
import checkAdminFirebaseUser from '../actions/checkAdminFirebaseUser.js';
import checkPermissionDenied from '../actions/checkPermissionDenied.js';
import saveFirebaseUser from '../actions/saveFirebaseUser.js';
import { addLoadingStatus } from '../../../helpers/operators';

const bootstrap = [
  set('state:login.is_loading', true),
  set('state:main.all_loaded', false),

  addLoadingStatus('Started', 'bootstrap', 'start'),
  addLoadingStatus('getUser', 'bootstrap', 'log'),

  getUser, {
    success: [
      set('state:login.is_logged', true),
      copy('input:user', 'state:login.user'),
      set('state:login.last_login_at', (new Date()).getTime()),
      // send user to firebase
      addLoadingStatus('getFirebaseUser', 'bootstrap', 'log'),
      getFirebaseUser, {
        not_exist: [
          // firebase: Permission Denied
          //           lets save to "users" on firebase
          addLoadingStatus('saveFirebaseUser', 'bootstrap', 'log'),
          saveFirebaseUser, {
            success: [
              set('state:login.user_saved', true),
            ],
            error: [
              copy('input:error', 'state:main.error_message'),
            ]
          },
        ],
        exist: [
          addLoadingStatus('getFirebaseGlobalConfigurations', 'bootstrap', 'log'),
          getFirebaseGlobalConfigurations, {
            success: [
              copy('input:value', 'state:configurations'),
            ],
            error: [
              copy('input:error', 'state:main.error_message'),
            ]
          },
          addLoadingStatus('getFirebaseUserConfigurations', 'bootstrap', 'log'),
          getFirebaseUserConfigurations, {
            success: [
              copy('input:value', 'state:login.user.configurations'),
            ],
            error: [
              copy('input:error', 'state:main.error_message'),
            ]
          },
          // existent user
          addLoadingStatus('checkAdminFirebaseUser', 'bootstrap', 'log'),
          checkAdminFirebaseUser, {
            success: [
              set('state:login.user.is_admin', true),
            ],
            error: [
              // Permission Denied
              checkPermissionDenied,
            ]
          }
        ],
        error: [
          copy('input:error', 'state:main.error_message'),
        ]
      },
    ],
    error: [
      set('state:login.is_logged', false),
      copy('input:error', 'state:main.error_message'),
    ]
  },

  addLoadingStatus('notificationRequestPermition', 'bootstrap', 'log'),
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
      copy('input:error', 'state:main.error_message'),
    ]
  },

  set('state:login.is_loading', false),
  addLoadingStatus('Finished!', 'bootstrap', 'end'),
];

export default bootstrap;
