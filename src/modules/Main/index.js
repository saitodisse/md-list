import showLogin from './chains/showLogin';
import showMain from './chains/showMain';
import showChatList from './chains/showChatList';
import showConfiguration from './chains/showConfiguration';
import showMembers from './chains/showMembers';
import showSearch from './chains/showSearch';
import bootstrap from './chains/bootstrap';
import initFirebase from './chains/initFirebase';
import unlistenFirebase from './chains/unlistenFirebase';
import getMembersFromFirebase from '~/modules/Members/chains/getMembersFromFirebase';

import {set} from 'cerebral/operators';

export default module => {
  module.addState({
    current_page: null,
    page_is_visible: true,
    window_size_is_mobile: null,
    is_saving: false,
    error: null,
    all_loaded: false,
    loading_status: {},
  });

  module.addSignals({
    redirectToMain: showMain,
    redirectedToLogin: showLogin,
    redirectedToChatList: showChatList,
    redirectedToConfiguration: showConfiguration,
    redirectedToMembers: showMembers,
    redirectedToSearch: showSearch,
    pageLoaded: [
      ...bootstrap,
      ...getMembersFromFirebase,
    ],
    userLoggedIn: initFirebase,
    userLoggedOut: unlistenFirebase,
    pageBecameHidden: [set('state:main.page_is_visible', false)],
    pageBecameVisible: [set('state:main.page_is_visible', true)],
    windowSizeIsMobileEmited: [set('state:main.window_size_is_mobile', true)],
    windowSizeIsDesktopEmited: [set('state:main.window_size_is_mobile', false)],
  });
};
