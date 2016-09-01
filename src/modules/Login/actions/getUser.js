function getUser({ services, output }) {
  services.firebase.getUser()
    .then(output.success)
    .catch(output.error);
}
getUser.async = true;

export default getUser;
