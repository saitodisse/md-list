const options = {
  orderByChild: 'created_at',
  startAt: (new Date()).getTime(),
};

function listenChanges({ services }) {
  services.firebase.onChildAdded('items', 'chatList.firebaseChildAdded', options);
  services.firebase.onChildRemoved('items', 'chatList.firebaseChildRemoved', {});
  services.firebase.onChildChanged('items', 'chatList.firebaseChildChanged', {});
}

export default listenChanges;
