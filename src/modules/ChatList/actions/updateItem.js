import firebase from 'firebase';

function updateItem({ input, state, output }) {
  // User info
  const user_id = state.get('login.user.uid');
  const displayName = state.get('login.user.displayName');
  const photoURL = state.get('login.user.photoURL');
  if (!user_id || !displayName) {
    throw new Error(`user_id (${user_id}) OR displayName (${displayName}) not found. Must login first.`);
  }

  // Prepare data
  const current_item = state.get('chatList.current_item');
  const body = current_item.body;

  // Get a key for a new Post.
  let key = null;
  if (input.id) {
    key = input.id;
  } else {
    key = firebase.database().ref().child('list').push().key;
  }

  const itemData = {
    id: key,
    user_id,
    displayName,
    photoURL,
    body,
    created_at: firebase.database.ServerValue.TIMESTAMP,
  };


  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates['/items/' + key] = itemData;

  // Send to firebase
  firebase.database().ref().update(updates)
    .then(output.success)
    .catch(output.error);
}

updateItem.async = true;
updateItem.outputs = ['success', 'error'];

export default updateItem;
