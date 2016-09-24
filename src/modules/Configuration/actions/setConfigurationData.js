import firebase from 'firebase';

function setConfigurationData(firebase_apth) {
  function setConfigurationDataFirebase({ input, output }) {
    const updates = {};
    updates[firebase_apth] = input.value;

    firebase.database().ref().update(updates)
      .then(output.success)
      .catch(output.error);
  }
  setConfigurationDataFirebase.async = true;
  setConfigurationDataFirebase.outputs = ['success', 'error'];

  return setConfigurationDataFirebase;
}


export default setConfigurationData;
