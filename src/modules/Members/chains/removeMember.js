import {set, copy} from 'cerebral/operators';
import removeMemberFromFirebase from '../actions/removeMemberFromFirebase.js';

const removeMember = [
  set('state:main.is_loading', true),
  removeMemberFromFirebase, {
    success: [
      // copy('input:value', `state:configurations.${config_key}`),
    ],
    error: [
      copy('input:error', 'state:main.error'),
    ]
  },
  set('state:main.is_loading', false),
];

export default removeMember;
