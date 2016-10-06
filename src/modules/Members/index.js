// chains
import getMembersFromFirebase from './chains/getMembersFromFirebase';
import addMember from './chains/addMember';
import removeUser from './chains/removeUser';
import makeAdmin from './chains/makeAdmin';
import removeMember from './chains/removeMember';
import unmakeAdmin from './chains/unmakeAdmin';
import firebaseMergeItem from './actions/firebaseMergeItem';
import firebaseRemoveItem from './actions/firebaseRemoveItem';

// actions

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

    // call actions directly
    usersChildAdded: [ firebaseMergeItem('members.usersList') ],
    usersChildChanged: [ firebaseMergeItem('members.usersList') ],
    usersChildRemoved: [ firebaseRemoveItem('members.usersList') ],
    membersChildAdded: [ firebaseMergeItem('members.membersList') ],
    membersChildChanged: [ firebaseMergeItem('members.membersList') ],
    membersChildRemoved: [ firebaseRemoveItem('members.membersList') ],
    adminsChildAdded: [ firebaseMergeItem('members.adminsList') ],
    adminsChildChanged: [ firebaseMergeItem('members.adminsList') ],
    adminsChildRemoved: [ firebaseRemoveItem('members.adminsList') ],
  });
};
