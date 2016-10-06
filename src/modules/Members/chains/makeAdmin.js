import { set, copy } from 'cerebral/operators';
import makeAdminInFirebase from '../actions/makeAdminInFirebase.js';

const makeAdmin = [
  set('state:main.is_loading', true),
  makeAdminInFirebase, {
    success: [
      // copy('input:value', `state:configurations.${config_key}`),
    ],
    error: [
      copy('input:error', 'state:main.error'),
    ]
  },
  set('state:main.is_loading', false),
];

export default makeAdmin;
