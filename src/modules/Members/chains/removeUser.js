import { set, copy } from 'cerebral/operators';
import removeUserFromFirebase from '../actions/removeUserFromFirebase.js';

const removeUser = [
  set('state:main.is_loading', true),
  removeUserFromFirebase, {
    success: [
      // copy('input:value', `state:configurations.${config_key}`),
    ],
    error: [
      copy('input:error', 'state:main.error'),
    ]
  },
  set('state:main.is_loading', false),
];

export default removeUser;
