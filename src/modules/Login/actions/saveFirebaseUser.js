import firebase from 'firebase';

function saveFirebaseUser({ input, output }) {
  // User info
  if (!input.user) {
    throw new Error('Cannot find user on input');
  }

  let key = null;
  if (input.user.uid) {
    // update: reuse key
    key = input.user.user_id || input.user.uid;
  } else {
    // insert: Get a key for a new Post.
    key = firebase.database().ref().child('users').push().key;
  }

  const itemData = {
    user_id: input.user.uid,
    displayName: input.user.displayName,
    photoURL: input.user.photoURL,
    created_at: firebase.database.ServerValue.TIMESTAMP,
  };
  const updates = {};
  updates['/users/' + key] = itemData;

  // Send to firebase
  firebase.database().ref().update(updates)
    .then(output.success)
    .catch(output.error);
}

saveFirebaseUser.async = true;
saveFirebaseUser.outputs = ['success', 'error'];

export default saveFirebaseUser;
