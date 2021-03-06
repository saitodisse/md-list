import loginFacebook from './chains/loginFacebook';
import userSignOut from './chains/userSignOut';

export default module => {
  module.addState({
    is_logged: null,
    is_loading: null,
    user: {},
    last_login_at: null,
  });

  module.addSignals({
    facebookLoginClicked: loginFacebook,
    signOutClicked: userSignOut,
  });
};
