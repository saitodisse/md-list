import getMembersFromFirebase from './chains/getMembersFromFirebase';
import addMember from './chains/addMember';
import removeUser from './chains/removeUser';
import makeAdmin from './chains/makeAdmin';
import removeMember from './chains/removeMember';
import unmakeAdmin from './chains/unmakeAdmin';

export default module => {
  module.addState({
    usersList: null,
    membersList: null,
    adminsList: null,
  });

  module.addSignals({
    pageLoaded: getMembersFromFirebase,
    addMemberClicked: addMember,
    removeUserClicked: removeUser,
    makeAdminClicked: makeAdmin,
    removeMemberClicked: removeMember,
    unmakeAdminClicked: unmakeAdmin,
  });
};
