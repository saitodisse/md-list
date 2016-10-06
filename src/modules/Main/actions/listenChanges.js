function listenChanges({ services, state }) {
  // Items
  // -----
  services.firebase.onChildAdded('items', 'chatList.firebaseChildAdded', {
    orderByChild: 'created_at',
    startAt: (new Date()).getTime(),
  });
  services.firebase.onChildRemoved('items', 'chatList.firebaseChildRemoved', {});
  services.firebase.onChildChanged('items', 'chatList.firebaseChildChanged', {});

  // Configurations
  // --------------
  services.firebase.onChildChanged('configurations', 'configurations.globalFirebaseChildChanged', {});

  // Users Configurations
  // --------------
  const user_id = state.get('login.user.uid');
  services.firebase.onChildChanged(`users.${user_id}.configurations`, 'configurations.userFirebaseChildChanged', {});


  if (state.get('login.user.is_admin')) {
    // Users
    // ------
    services.firebase.onChildAdded('users', 'members.usersChildAdded', {
      orderByChild: 'updated_at',
      startAt: (new Date()).getTime(),
      // startAt: _.last(_.keys(state.get('members.usersList'))).updated_at
    });
    services.firebase.onChildRemoved('users', 'members.usersChildRemoved', {});
    services.firebase.onChildChanged('users', 'members.usersChildChanged', {});


    // Members
    // ------
    services.firebase.onChildAdded('members', 'members.membersChildAdded', {
      orderByChild: 'created_at',
      startAt: (new Date()).getTime(),
      // startAt: _.last(_.keys(state.get('members.membersList'))).created_at
    });
    services.firebase.onChildRemoved('members', 'members.membersChildRemoved', {});
    services.firebase.onChildChanged('members', 'members.membersChildChanged', {});


    // Admins
    // ------
    services.firebase.onChildAdded('admins', 'members.adminsChildAdded', {
      orderByChild: 'created_at',
      startAt: (new Date()).getTime(),
      // startAt: _.last(_.keys(state.get('members.adminsList'))).created_at
    });
    services.firebase.onChildRemoved('admins', 'members.adminsChildRemoved', {});
    services.firebase.onChildChanged('admins', 'members.adminsChildChanged', {});

    // Admins
    // ------
    services.firebase.onChildAdded('crawler.body_results', 'jobs.bodyResultChildAdded', {
      orderByChild: 'created_at',
      startAt: (new Date()).getTime(),
      // startAt: _.last(_.keys(state.get('jobs.bodyResultList'))).created_at
    });
    services.firebase.onChildRemoved('crawler.body_results', 'jobs.bodyResultChildRemoved', {});
    services.firebase.onChildChanged('crawler.body_results', 'jobs.bodyResultChildChanged', {});
  }
}

export default listenChanges;
