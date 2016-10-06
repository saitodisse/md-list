import { set, copy } from 'cerebral/operators';
import addMemberToFirebase from '../actions/addMemberToFirebase.js';

const addMember = [
  set('state:main.is_loading', true),
  addMemberToFirebase, {
    success: [
      // copy('input:value', `state:configurations.${config_key}`),
    ],
    error: [
      copy('input:error', 'state:main.error'),
    ]
  },
  set('state:main.is_loading', false),
];

export default addMember;
