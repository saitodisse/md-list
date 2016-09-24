function listenChanges({ services, state }) {
  // Items
  services.firebase.onChildAdded('items', 'chatList.firebaseChildAdded', {
    orderByChild: 'created_at',
    startAt: (new Date()).getTime(),
  });
  services.firebase.onChildRemoved('items', 'chatList.firebaseChildRemoved', {});
  services.firebase.onChildChanged('items', 'chatList.firebaseChildChanged', {});

  // Configurations
  services.firebase.onChildChanged('configurations', 'configurations.globalFirebaseChildChanged', {});
  // Users Configurations
  const user_id = state.get('login.user.uid');
  services.firebase.onChildChanged(`users.${user_id}.configurations`, 'configurations.userFirebaseChildChanged', {});
}

export default listenChanges;
