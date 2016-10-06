import firebase from 'firebase';

function setFirebaseData(path, value) {
  function setFirebaseDataFirebase({ output }) {
    const updates = {};
    updates[ path ] = value;

    firebase.database().ref().update(updates)
      .then(output.success)
      .catch(output.error);
  }

  setFirebaseDataFirebase.async = true;
  setFirebaseDataFirebase.outputs = [ 'success', 'error' ];

  return setFirebaseDataFirebase;
}


export default setFirebaseData;
