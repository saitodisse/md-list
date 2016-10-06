import firebase from 'firebase';

function deleteItem({ input, output }) {
  const itemToDelete = input.id;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates[ '/items/' + itemToDelete ] = null;

  firebase.database().ref().update(updates)
    .then(output.success)
    .catch(output.error);
}

deleteItem.async = true;
deleteItem.outputs = [ 'success', 'error' ];

export default deleteItem;
