import showLogin from './chains/showLogin';
import showList from './chains/showList';
import showMain from './chains/showMain';

export default module => {
  module.addState({
    current_page: null,
  });

  module.addSignals({
    redirectToMain: showMain,
    redirectToLogin: showLogin,
    redirectToList: showList,
  });
};
