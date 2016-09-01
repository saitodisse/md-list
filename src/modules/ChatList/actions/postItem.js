import firebase from 'firebase';

function postItem({ state, input, output }) {
  // const {body} = input;
  const uid = state.get('login.user.uid');
  const displayName = state.get('login.user.displayName');

  if (!uid || !displayName) {
    throw new Error(`uid (${uid}) OR displayName (${displayName}) not found. Must login first.`);
  }

  const current_item = state.get('chatList.current_item');
  const body = current_item.body;

  const itemData = {
    uid,
    displayName,
    body,
  };

  // Get a key for a new Post.
  const newItemKey = firebase.database().ref().child('list').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates['/items/' + newItemKey] = itemData;
  updates['/user-items/' + uid + '/' + newItemKey] = itemData;

  firebase.database().ref().update(updates)
    .then(output.success)
    .catch(output.error);
}

postItem.async = true;
postItem.outputs = ['success', 'error'];

export default postItem;
