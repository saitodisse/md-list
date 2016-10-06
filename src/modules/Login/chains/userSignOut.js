import { set, copy } from 'cerebral/operators';
import signOut from '../actions/signOut.js';

const userSignOut = [
  set('state:login.is_loading', true),
  signOut, {
    success: [
      set('state:login.is_logged', false),
      set('state:login.user', {}),
    ],
    error: [
      copy('input:error', 'state:main.error_message'),
    ]
  },
  set('state:login.is_loading', false),
];


export default userSignOut;
