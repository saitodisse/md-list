import showLogin from './chains/showLogin';
import showList from './chains/showList';
import showMain from './chains/showMain';
import showChatList from './chains/showChatList';
import listenDatabase from './chains/listenDatabase';
import unlistenDatabase from './chains/unlistenDatabase';

export default module => {
  module.addState({
    current_page: null,
  });

  module.addSignals({
    redirectToMain: showMain,
    redirectToLogin: showLogin,
    redirectToList: showList,
    redirectToChatList: showChatList,
    pageLoaded: listenDatabase,
    pageUnloaded: unlistenDatabase,
  });
};
