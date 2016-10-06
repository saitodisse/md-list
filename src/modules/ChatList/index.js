// chains
import receiveDataFromFirebase from './chains/receiveDataFromFirebase';
import deleteChildFromFirebase from './chains/deleteChildFromFirebase';
import deleteItemChain from './chains/deleteItemChain';
import setBody from './chains/setBody';
import submitItemBody from './chains/submitItemBody';
import setCurrentItem from './chains/setCurrentItem';
import cancelEdit from './chains/cancelEdit';
import scrollItems from './chains/scrollItems';
import clearScroll from './chains/clearScroll';
import { set } from 'cerebral/operators';

// operators

export default module => {
  module.addState({
    items: {},
    current_item: { body: '' },
    first_item_key: null,
    limitToLast: 10,
    scroll_requested: null,
  });

  module.addSignals({
    firebaseChildAdded: receiveDataFromFirebase,
    firebaseChildRemoved: deleteChildFromFirebase,
    firebaseChildChanged: receiveDataFromFirebase,

    currentItemChanged: {
      chain: setBody,
      immediate: true
    },
    currentItemSubmitted: submitItemBody,
    removeItemClicked: deleteItemChain,
    itemClicked: setCurrentItem,
    editCanceled: cancelEdit,
    scrollItemsRequested: scrollItems,
    scrollDone: clearScroll,
    pageReady: [ set('state:chatList.is_ready', true) ],
  });
};
