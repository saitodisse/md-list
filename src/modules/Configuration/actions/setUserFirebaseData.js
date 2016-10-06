import firebase from 'firebase';

function setUserFirebaseData(path, value) {
  function setUserFirebaseDataFirebase({ state, output }) {
    const updates = {};
    updates[ `users/${state.get('login.user.uid')}/${path}` ] = value;

    firebase.database().ref().update(updates)
      .then(output.success)
      .catch(output.error);
  }

  setUserFirebaseDataFirebase.async = true;
  setUserFirebaseDataFirebase.outputs = [ 'success', 'error' ];

  return setUserFirebaseDataFirebase;
}


export default setUserFirebaseData;
