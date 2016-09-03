import loginFacebook from './chains/loginFacebook';
import signOut from './chains/signOut';

export default module => {
  module.addState({
    is_logged: null,
    is_loading: null,
    error_code: null,
    error_message: null,
    user: {},
  });

  module.addSignals({
    facebookLoginClicked: loginFacebook,
    signOutClicked: signOut,
  });
};
