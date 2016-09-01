function unlistenChanges({ services }) {
  services.firebase.off('items', 'onChildAdded', 'chatList.firebaseChildAdded');
  services.firebase.off('items', 'onChildRemoved', 'chatList.firebaseChildRemoved');
  services.firebase.off('items', 'onChildChanged', 'chatList.firebaseChildChanged');
}

export default unlistenChanges;
