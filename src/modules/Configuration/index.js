import getConfigurations from './chains/getConfigurations';
import toggleConfiguration from './chains/toggleConfiguration';
import toggleConfiguration2 from './chains/toggleConfiguration2';
import receiveGlobalConfigFromFirebase from './chains/receiveGlobalConfigFromFirebase';
import receiveUserConfigFromFirebase from './chains/receiveUserConfigFromFirebase';
import createInitialConfigurations from './chains/createInitialConfigurations';

export default module => {
  module.addState({
    edit_other_users_items: false,
    restricted_access_to_members: false,
  });

  module.addSignals({
    pageLoaded: getConfigurations,
    editOtherUsersItemsClicked: toggleConfiguration('/configurations/app/edit_other_users_items'),
    restrictedAccessToMembersClicked: toggleConfiguration('/configurations/app/restricted_access_to_members'),
    createInitialConfigurationsClicked: createInitialConfigurations,
    globalFirebaseChildChanged: receiveGlobalConfigFromFirebase,
    userFirebaseChildChanged: receiveUserConfigFromFirebase,
    toggleConfigurationClicked: toggleConfiguration2,
  });
};
