import getConfigurations from './chains/getConfigurations';
import toggleConfiguration from './chains/toggleConfiguration';
import receiveGlobalConfigFromFirebase from './chains/receiveGlobalConfigFromFirebase';
import receiveUserConfigFromFirebase from './chains/receiveUserConfigFromFirebase';
import createInitialConfigurations from './chains/createInitialConfigurations';

export default module => {
  module.addSignals({
    pageLoaded: getConfigurations,
    createInitialConfigurationsClicked: createInitialConfigurations,
    globalFirebaseChildChanged: receiveGlobalConfigFromFirebase,
    userFirebaseChildChanged: receiveUserConfigFromFirebase,
    toggleConfigurationClicked: toggleConfiguration,
  });
};
