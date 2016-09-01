function unlistenChanges({ services }) {
  services.firebase.off('items', 'onChildAdded', 'chat.firebaseChildAdded');
  services.firebase.off('items', 'onChildRemoved', 'chat.firebaseChildRemoved');
  services.firebase.off('items', 'onChildChanged', 'chat.firebaseChildChanged');
}

export default unlistenChanges;
