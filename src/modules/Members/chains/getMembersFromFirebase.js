import {set, copy} from 'cerebral/operators';
import getUsersData from '../actions/getUsersData.js';
import getMembersData from '../actions/getMembersData.js';
import getAdminsData from '../actions/getAdminsData.js';

const getMembers = [
  set('state:main.is_loading', true),
  getUsersData, {
    success: [
      copy('input:value', 'state:members.usersList'),
    ],
    error: [
      copy('input:error', 'state:main.error'),
    ]
  },
  getMembersData, {
    success: [
      copy('input:value', 'state:members.membersList'),
    ],
    error: [
      copy('input:error', 'state:main.error'),
    ]
  },
  getAdminsData, {
    success: [
      copy('input:value', 'state:members.adminsList'),
    ],
    error: [
      copy('input:error', 'state:main.error'),
    ]
  },
  set('state:main.is_loading', false),
];

export default getMembers;
