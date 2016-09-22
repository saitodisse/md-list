function listenChanges({ services }) {
  services.firebase.onChildAdded('items', 'chatList.firebaseChildAdded', {
    orderByChild: 'created_at',
    startAt: (new Date()).getTime(),
  });
  services.firebase.onChildRemoved('items', 'chatList.firebaseChildRemoved', {});
  services.firebase.onChildChanged('items', 'chatList.firebaseChildChanged', {});
}

export default listenChanges;
