function getConfigurationData({ services, output }) {
  services.firebase.value('configurations')
    .then(output.success)
    .catch(output.error);
}

getConfigurationData.async = true;
getConfigurationData.outputs = ['success', 'error'];

export default getConfigurationData;
