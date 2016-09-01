function listenChanges({ services }) {
  // services.firebase.onValue('some_data', 'chat.dataReceived');

  services.firebase.onChildAdded('items', 'chat.firebaseChildAdded', {
    // payload: {}, // Merged with the payload of the signal
    // limitToFirst: 5, // Read Firebase docs
    // limitToLast: 5, // Read Firebase docs
    // startAt: 5, // Read Firebase docs
    // endAt: 5, // Read Firebase docs
    // equalTo: 5, // Read Firebase docs
    // orderByChild: 'count', // Read Firebase docs
    // orderByKey: true, // Read Firebase docs
    // orderByValue: true // Read Firebase docs
  });

  services.firebase.onChildRemoved('items', 'chat.firebaseChildRemoved', {
    // payload: {}, // Merged with the payload of the signal
    // limitToFirst: 5, // Read Firebase docs
    // limitToLast: 5, // Read Firebase docs
    // startAt: 5, // Read Firebase docs
    // endAt: 5, // Read Firebase docs
    // equalTo: 5, // Read Firebase docs
    // orderByChild: 'count', // Read Firebase docs
    // orderByKey: true, // Read Firebase docs
    // orderByValue: true // Read Firebase docs
  });

  services.firebase.onChildChanged('items', 'chat.firebaseChildChanged', {
    // payload: {}, // Merged with the payload of the signal
    // limitToFirst: 5, // Read Firebase docs
    // limitToLast: 5, // Read Firebase docs
    // startAt: 5, // Read Firebase docs
    // endAt: 5, // Read Firebase docs
    // equalTo: 5, // Read Firebase docs
    // orderByChild: 'count', // Read Firebase docs
    // orderByKey: true, // Read Firebase docs
    // orderByValue: true // Read Firebase docs
  });
}

export default listenChanges;
