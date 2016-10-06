import firebase from 'firebase';

function unmakeAdminInFirebase({ input, output }) {
  const updates = {};
  updates[ `admins/${input.user_id}` ] = null;

  firebase.database().ref().update(updates)
    .then(output.success)
    .catch(output.error);
}
unmakeAdminInFirebase.async = true;
unmakeAdminInFirebase.outputs = [ 'success', 'error' ];

export default unmakeAdminInFirebase;
