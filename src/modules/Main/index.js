import showLogin from './chains/showLogin';
import showMain from './chains/showMain';
import showChatList from './chains/showChatList';
import bootstrap from './chains/bootstrap';
import listenDatabase from './chains/listenDatabase';
import unlistenDatabase from './chains/unlistenDatabase';

export default module => {
  module.addState({
    current_page: null,
  });

  module.addSignals({
    redirectToMain: showMain,
    redirectToLogin: showLogin,
    redirectToChatList: showChatList,
    pageLoaded: bootstrap,
    userLoggedIn: listenDatabase,
    userLoggedOut: unlistenDatabase,
  });
};
