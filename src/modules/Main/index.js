import bootstrap from './chains/bootstrap';
import initFirebase from './chains/initFirebase';
import getMoreItemsFromFirebase from './chains/getMoreItemsFromFirebase';
import unlistenFirebase from './chains/unlistenFirebase';
import getMembersFromFirebase from '../../modules/Members/chains/getMembersFromFirebase';
import { set } from 'cerebral/operators';
import {
  PAGE_JOBS,
  PAGE_EXECUTIONS,
  PAGE_BODY_RESULTS,
  PAGE_JSON_EXTRATIONS,
  PAGE_MARKDOWN_CONVERSIONS,
  PAGE_LOGIN,
  PAGE_CHAT_LIST,
  PAGE_CONFIGURATION,
  PAGE_MEMBERS,
  PAGE_SEARCH,
  PAGE_EMPTY,
  PAGE_SET_STATES,
} from '../../constants/index';

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
    // Router
    redirectedToMain: [ set('state:main.current_page', PAGE_EMPTY) ],
    redirectedToLogin: [ set('state:main.current_page', PAGE_LOGIN) ],
    redirectedToChatList: [ set('state:main.current_page', PAGE_CHAT_LIST) ],
    redirectedToConfiguration: [ set('state:main.current_page', PAGE_CONFIGURATION) ],
    redirectedToMembers: [ set('state:main.current_page', PAGE_MEMBERS) ],
    redirectedToSearch: [ set('state:main.current_page', PAGE_SEARCH) ],
    redirectedToJobs: [ set('state:main.current_page', PAGE_JOBS) ],
    redirectedToExecutions: [ set('state:main.current_page', PAGE_EXECUTIONS) ],
    redirectedToBody_Results: [ set('state:main.current_page', PAGE_BODY_RESULTS) ],
    redirectedToJSON_Extrations: [ set('state:main.current_page', PAGE_JSON_EXTRATIONS) ],
    redirectedToMarkdown_Conversions: [ set('state:main.current_page', PAGE_MARKDOWN_CONVERSIONS) ],
    redirectedToSetStates: [ set('state:main.current_page', PAGE_SET_STATES) ],

    pageLoaded: [
      ...bootstrap,
      ...getMembersFromFirebase,
    ],
    userLoggedIn: initFirebase,
    userLoggedOut: unlistenFirebase,
    pageBecameHidden: [ set('state:main.page_is_visible', false) ],
    pageBecameVisible: [ set('state:main.page_is_visible', true) ],
    windowSizeIsMobileEmited: [ set('state:main.window_size_is_mobile', true) ],
    windowSizeIsDesktopEmited: [ set('state:main.window_size_is_mobile', false) ],
    getMoreItemsRequested: getMoreItemsFromFirebase,
  });
};
