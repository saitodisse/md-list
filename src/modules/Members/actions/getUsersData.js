function getUsersData({ services, output }) {
  services.firebase.value('users')
    .then(output.success)
    .catch(output.error);
}

getUsersData.async = true;
getUsersData.outputs = ['success', 'error'];

export default getUsersData;
