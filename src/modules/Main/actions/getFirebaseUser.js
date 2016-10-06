function getFirebaseUser({ input, services, output }) {
  services.firebase.value(`users.${input.user.uid}`)
    .then((result) => {
      if (result.value === null) {
        return output.not_exist();
      }
      return output.exist();
    })
    .catch(output.error);
}

getFirebaseUser.async = true;
getFirebaseUser.outputs = [ 'exist', 'not_exist', 'error' ];

export default getFirebaseUser;
