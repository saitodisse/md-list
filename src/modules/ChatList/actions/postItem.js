import firebase from 'firebase';

function postItem({ state, input }) {
  // const {body} = input;
  const uid = state.get('login.user.uid');
  const displayName = state.get('login.user.displayName');
  const body = 'Teste 123';

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

  return firebase.database().ref().update(updates);
}

export default postItem;
