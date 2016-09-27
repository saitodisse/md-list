import getMembersFromFirebase from './chains/getMembersFromFirebase';

export default module => {
  module.addState({
    usersList: null,
    membersList: null,
    adminsList: null,
  });

  module.addSignals({
    pageLoaded: getMembersFromFirebase,
  });
};
