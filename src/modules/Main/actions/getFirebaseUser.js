function getFirebaseUser({ services, output }) {
  services.firebase.value('users')
    .then(output.success)
    .catch(output.error);
}

getFirebaseUser.async = true;
getFirebaseUser.outputs = ['success', 'error'];

export default getFirebaseUser;
