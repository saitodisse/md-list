function getInitialData({ services, output }) {
  services.firebase.value('items')
    .then(output.success)
    .catch(output.error);
}

getInitialData.async = true;
getInitialData.outputs = ['success', 'error'];

export default getInitialData;
