function getFirebaseUser({ input, services, output }) {
  services.firebase.value(`users.${input.user.uid}`)
    .then(output.success)
    .catch(output.error);
}

getFirebaseUser.async = true;
getFirebaseUser.outputs = ['success', 'error'];

export default getFirebaseUser;
