import { set, copy } from 'cerebral/operators';
import unmakeAdminInFirebase from '../actions/unmakeAdminInFirebase.js';

const unmakeAdmin = [
  set('state:main.is_loading', true),
  unmakeAdminInFirebase, {
    success: [
      // copy('input:value', `state:configurations.${config_key}`),
    ],
    error: [
      copy('input:error', 'state:main.error'),
    ]
  },
  set('state:main.is_loading', false),
];

export default unmakeAdmin;
