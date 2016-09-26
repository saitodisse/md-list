function getFirebaseGlobalConfigurations({ services, output }) {
  services.firebase.value('configurations')
    .then(output.success)
    .catch(output.error);
}

getFirebaseGlobalConfigurations.async = true;
getFirebaseGlobalConfigurations.outputs = ['error', 'success'];

export default getFirebaseGlobalConfigurations;
