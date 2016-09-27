function unlistenChanges({ services, state }) {
  services.firebase.off('items', 'onChildAdded', 'chatList.firebaseChildAdded');
  services.firebase.off('items', 'onChildRemoved', 'chatList.firebaseChildRemoved');
  services.firebase.off('items', 'onChildChanged', 'chatList.firebaseChildChanged');

  if (state.get('login.user.is_admin')) {
    services.firebase.off('users', 'onChildAdded', 'members.usersChildAdded');
    services.firebase.off('users', 'onChildRemoved', 'members.usersChildRemoved');
    services.firebase.off('users', 'onChildChanged', 'members.usersChildChanged');

    services.firebase.off('members', 'onChildAdded', 'members.membersChildAdded');
    services.firebase.off('members', 'onChildRemoved', 'members.membersChildRemoved');
    services.firebase.off('members', 'onChildChanged', 'members.membersChildChanged');

    services.firebase.off('admins', 'onChildAdded', 'members.adminsChildAdded');
    services.firebase.off('admins', 'onChildRemoved', 'members.adminsChildRemoved');
    services.firebase.off('admins', 'onChildChanged', 'members.adminsChildChanged');
  }
}

export default unlistenChanges;
