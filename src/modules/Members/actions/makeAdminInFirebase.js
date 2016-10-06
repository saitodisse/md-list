import firebase from 'firebase';

function makeAdminInFirebase({ input, output }) {
  const updates = {};
  updates[ `admins/${input.user_id}` ] = {
    user_id: input.user_id,
    created_at: firebase.database.ServerValue.TIMESTAMP,
  };

  firebase.database().ref().update(updates)
    .then(output.success)
    .catch(output.error);
}
makeAdminInFirebase.async = true;
makeAdminInFirebase.outputs = [ 'success', 'error' ];

export default makeAdminInFirebase;
