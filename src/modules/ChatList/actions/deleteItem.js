import R from 'ramda';
import firebase from 'firebase';

function deleteItem({ state }) {
  const uid = state.get('login.user.uid');
  const items = state.get('chatList.items');
  const keys = R.keys(items);

  // Get a key for a new Post.
  const itemToDelete = keys[0];

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates['/items/' + itemToDelete] = null;
  updates['/user-items/' + uid + '/' + itemToDelete] = null;

  return firebase.database().ref().update(updates);
}

export default deleteItem;
