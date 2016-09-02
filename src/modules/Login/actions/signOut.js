function signOut({ services, output }) {
  services.firebase.signOut()
    .then(output.success)
    .catch(output.error);
}
signOut.async = true;

export default signOut;
