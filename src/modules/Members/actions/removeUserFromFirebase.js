import firebase from 'firebase';

function removeUserFromFirebase({ input, output }) {
  const updates = {};
  updates[`users/${input.user_id}`] = null;

  firebase.database().ref().update(updates)
    .then(output.success)
    .catch(output.error);
}
removeUserFromFirebase.async = true;
removeUserFromFirebase.outputs = ['success', 'error'];

export default removeUserFromFirebase;
