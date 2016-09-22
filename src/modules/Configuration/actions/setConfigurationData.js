import firebase from 'firebase';

function setConfigurationData(config_key) {
  function setConfigurationDataFirebase({ input, output }) {
    const updates = {};
    updates[`/configurations/${config_key}`] = input.value;

    firebase.database().ref().update(updates)
      .then(output.success)
      .catch(output.error);
  }
  setConfigurationDataFirebase.async = true;
  setConfigurationDataFirebase.outputs = ['success', 'error'];

  return setConfigurationDataFirebase;
}


export default setConfigurationData;
