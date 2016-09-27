import firebase from 'firebase';

function removeMemberFromFirebase({ input, output }) {
  const updates = {};
  updates[`members/${input.user_id}`] = null;

  firebase.database().ref().update(updates)
    .then(output.success)
    .catch(output.error);
}
removeMemberFromFirebase.async = true;
removeMemberFromFirebase.outputs = ['success', 'error'];

export default removeMemberFromFirebase;
