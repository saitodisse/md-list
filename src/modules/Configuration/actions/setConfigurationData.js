import firebase from 'firebase';

function setConfigurationData({ input, output }) {
  const updates = {};
  updates[input.path] = input.value;

  firebase.database().ref().update(updates)
    .then(output.success)
    .catch(output.error);
}
setConfigurationData.async = true;
setConfigurationData.outputs = ['success', 'error'];

export default setConfigurationData;
