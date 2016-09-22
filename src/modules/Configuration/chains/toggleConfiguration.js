import {set, copy} from 'cerebral/operators';
import setConfigurationData from '../actions/setConfigurationData.js';

const toggleConfiguration = (config_key) => ([
  set('state:main.is_loading', true),
  setConfigurationData(config_key), {
    success: [
      copy('input:value', `state:configuration.${config_key}`),
    ],
    error: [
      copy('input:message', 'state:main.error'),
    ]
  },
  set('state:main.is_loading', false),
]);

export default toggleConfiguration;
