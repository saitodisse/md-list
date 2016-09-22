import getConfigurations from './chains/getConfigurations';
import toggleConfiguration from './chains/toggleConfiguration';

export default module => {
  module.addState({
    edit_other_users_items: false,
    restricted_access_to_members: false,
  });

  module.addSignals({
    pageLoaded: getConfigurations,
    editOtherUsersItemsClicked: toggleConfiguration('edit_other_users_items'),
    restrictedAccessToMembersClicked: toggleConfiguration('restricted_access_to_members'),
  });
};
