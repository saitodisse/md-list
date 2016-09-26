import {set, copy} from 'cerebral/operators';
import getConfigurationData from '../actions/getConfigurationData.js';
import getUserConfigurationData from '../actions/getUserConfigurationData.js';

const getConfigurations = [
  set('state:main.is_loading', true),
  getConfigurationData, {
    success: [
      copy('input:value', 'state:configurations'),
    ],
    error: [
      copy('input:error', 'state:main.error'),
    ]
  },
  getUserConfigurationData, {
    success: [
      copy('input:value', 'state:login.user.configurations'),
    ],
    error: [
      copy('input:error', 'state:main.error'),
    ]
  },
  set('state:main.is_loading', false),
];

export default getConfigurations;
