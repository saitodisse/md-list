import firebase from 'firebase';

function saveInitialConfigurations({ state, output }) {
  const user_id = state.get('login.user.uid');
  const global_configurations = state.get('configurations.user');

  const updates = {};
  updates[`users/${user_id}/configurations`] = global_configurations;

  firebase.database().ref().update(updates)
    .then(output.success)
    .catch(output.error);
}

saveInitialConfigurations.async = true;
saveInitialConfigurations.outputs = ['success', 'error'];

export default saveInitialConfigurations;
