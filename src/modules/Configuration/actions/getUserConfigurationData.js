function getUserConfigurationData({ services, state, output }) {
  const user_id = state.get('login.user.uid');
  services.firebase.value(`users.${user_id}.configurations`)
    .then(output.success)
    .catch(output.error);
}

getUserConfigurationData.async = true;
getUserConfigurationData.outputs = [ 'success', 'error' ];

export default getUserConfigurationData;
