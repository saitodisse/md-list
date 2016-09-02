function listenChanges({ services }) {
  services.firebase.onChildAdded('items', 'chatList.firebaseChildAdded', {});
  services.firebase.onChildRemoved('items', 'chatList.firebaseChildRemoved', {});
  services.firebase.onChildChanged('items', 'chatList.firebaseChildChanged', {});
  // options
  // payload: {}, // Merged with the payload of the signal
  // limitToFirst: 5, // Read Firebase docs
  // limitToLast: 5, // Read Firebase docs
  // startAt: 5, // Read Firebase docs
  // endAt: 5, // Read Firebase docs
  // equalTo: 5, // Read Firebase docs
  // orderByChild: 'count', // Read Firebase docs
  // orderByKey: true, // Read Firebase docs
  // orderByValue: true // Read Firebase docs
}

export default listenChanges;
