import {set, copy} from 'cerebral/operators';
import getConfigurationData from '../actions/getConfigurationData.js';

const getConfigurations = [
  set('state:login.is_loading', true),
  getConfigurationData, {
    success: [
      copy('input:value', 'state:configuration.data'),
    ],
    error: [
      copy('input:message', 'state:main.error'),
    ]
  },
  set('state:login.is_loading', false),
];

export default getConfigurations;
