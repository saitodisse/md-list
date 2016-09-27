function getAdminsData({ services, output }) {
  services.firebase.value('admins')
    .then(output.success)
    .catch(output.error);
}

getAdminsData.async = true;
getAdminsData.outputs = ['success', 'error'];

export default getAdminsData;
