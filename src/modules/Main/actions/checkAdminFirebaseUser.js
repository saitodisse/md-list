function checkAdminFirebaseUser({ input, services, output }) {
  services.firebase.value(`roles.admins.${input.user.uid}`)
    .then(output.success)
    .catch(output.error);
}

checkAdminFirebaseUser.async = true;
checkAdminFirebaseUser.outputs = ['success', 'error'];

export default checkAdminFirebaseUser;
