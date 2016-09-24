import {set, copy} from 'cerebral/operators';
import setConfigurationData2 from '../actions/setConfigurationData2.js';

const toggleConfiguration = [
  set('state:main.is_loading', true),
  setConfigurationData2, {
    success: [
      // copy('input:value', `state:configurations.${config_key}`),
    ],
    error: [
      copy('input:message', 'state:main.error'),
    ]
  },
  set('state:main.is_loading', false),
];

export default toggleConfiguration;
