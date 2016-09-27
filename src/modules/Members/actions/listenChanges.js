// import R from 'ramda';

function listenChanges({ services }) {
  // users
  // ------
  services.firebase.onChildAdded('users', 'members.usersChildAdded', {
    orderByChild: 'updated_at',
    startAt: (new Date()).getTime(),
    // startAt: R.last(R.keys(state.get('members.usersList'))).updated_at
  });
  services.firebase.onChildRemoved('users', 'members.usersChildRemoved', {});
  services.firebase.onChildChanged('users', 'members.usersChildChanged', {});


  // members
  // ------
  services.firebase.onChildAdded('members', 'members.membersChildAdded', {
    orderByChild: 'created_at',
    startAt: (new Date()).getTime(),
    // startAt: R.last(R.keys(state.get('members.membersList'))).created_at
  });
  services.firebase.onChildRemoved('members', 'members.membersChildRemoved', {});
  services.firebase.onChildChanged('members', 'members.membersChildChanged', {});


  // admins
  // ------
  services.firebase.onChildAdded('admins', 'members.adminsChildAdded', {
    orderByChild: 'created_at',
    startAt: (new Date()).getTime(),
    // startAt: R.last(R.keys(state.get('members.adminsList'))).created_at
  });
  services.firebase.onChildRemoved('admins', 'members.adminsChildRemoved', {});
  services.firebase.onChildChanged('admins', 'members.adminsChildChanged', {});
}

export default listenChanges;
