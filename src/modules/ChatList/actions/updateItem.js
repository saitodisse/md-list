import firebase from 'firebase';
import R from 'ramda';

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
  const is_updating = !R.isNil(input.id);

  // Get a key for a new Post.
  let key = null;
  if (is_updating) {
    key = input.id;
  } else {
    key = firebase.database().ref().child('items').push().key;
  }

  const itemData = {
    id: key,
    user_id,
    displayName,
    photoURL,
    body,
  };


  if (is_updating) {
    const updates = {};
    updates[`/items/${key}/id`] = itemData.id;
    updates[`/items/${key}/user_id`] = itemData.user_id;
    updates[`/items/${key}/displayName`] = itemData.displayName;
    updates[`/items/${key}/photoURL`] = itemData.photoURL;
    updates[`/items/${key}/body`] = itemData.body;
    updates[`/items/${key}/updated_at`] = firebase.database.ServerValue.TIMESTAMP;

    firebase.database().ref().update(updates)
      .then(output.success)
      .catch(output.error);
  } else {
    itemData.created_at = firebase.database.ServerValue.TIMESTAMP;

    const itemsRef = firebase.database().ref().child('items').push();
    itemsRef.set(itemData)
      .then(output.success)
      .catch(output.error);
  }
}

updateItem.async = true;
updateItem.outputs = ['success', 'error'];

export default updateItem;
