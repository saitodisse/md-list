import {set} from 'cerebral/operators';
import showLogin from './chains/showLogin';
import showMain from './chains/showMain';
import showChatList from './chains/showChatList';
import bootstrap from './chains/bootstrap';
import listenDatabase from './chains/listenDatabase';
import unlistenDatabase from './chains/unlistenDatabase';

export default module => {
  module.addState({
    current_page: null,
    page_is_visible: true,
    window_size_is_mobile: null,
    is_saving: false,
    error: null,
  });

  module.addSignals({
    redirectToMain: showMain,
    redirectToLogin: showLogin,
    redirectToChatList: showChatList,
    pageLoaded: bootstrap,
    userLoggedIn: listenDatabase,
    userLoggedOut: unlistenDatabase,
    pageBecameHidden: [set('state:main.page_is_visible', false)],
    pageBecameVisible: [set('state:main.page_is_visible', true)],
    windowSizeIsMobileEmited: [set('state:main.window_size_is_mobile', true)],
    windowSizeIsDesktopEmited: [set('state:main.window_size_is_mobile', false)],
  });
};
