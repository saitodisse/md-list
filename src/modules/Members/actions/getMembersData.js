function getMembersData({ services, output }) {
  services.firebase.value('members')
    .then(output.success)
    .catch(output.error);
}

getMembersData.async = true;
getMembersData.outputs = ['success', 'error'];

export default getMembersData;
