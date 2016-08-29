function facebookLogin({ services, output }) {
  services.firebase.signInWithFacebook({
    redirect: false,
    scopes: [], // Facebook scopes to access
  })
  .then(output.success)
  .catch(output.error);
}
facebookLogin.async = true;

export default facebookLogin;
