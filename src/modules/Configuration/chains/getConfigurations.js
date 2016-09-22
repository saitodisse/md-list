import {set, copy} from 'cerebral/operators';
import getConfigurationData from '../actions/getConfigurationData.js';

const getConfigurations = [
  set('state:login.is_loading', true),
  getConfigurationData, {
    success: [
      copy('input:value.edit_other_users_items', 'state:configuration.edit_other_users_items'),
      copy('input:value.restricted_access_to_members', 'state:configuration.restricted_access_to_members'),
    ],
    error: [
      copy('input:message', 'state:main.error'),
    ]
  },
  set('state:login.is_loading', false),
];

export default getConfigurations;
