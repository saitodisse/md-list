import unsetLogged from './chains/unsetLogged';

export default module => {
  module.addState({
    isLogged: false,
    isLogging: false,
    error: null,
  });

  module.addSignals({
    pageLoaded: unsetLogged,
    // loginClicked: loginWithFirebase,
  });
};
