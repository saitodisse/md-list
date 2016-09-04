import loginFacebook from './chains/loginFacebook';
import userSignOut from './chains/userSignOut';

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
    signOutClicked: userSignOut,
  });
};
