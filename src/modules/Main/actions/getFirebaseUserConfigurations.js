function getFirebaseUserConfigurations({ input, services, output }) {
  const user_id = input.user.uid;
  services.firebase.value(`users.${user_id}.configurations`)
    .then(output.success)
    .catch(output.error);
}

getFirebaseUserConfigurations.async = true;
getFirebaseUserConfigurations.outputs = [ 'error', 'success' ];

export default getFirebaseUserConfigurations;
