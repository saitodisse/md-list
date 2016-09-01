// chains
import listenDatabase from './chains/listenDatabase';
import unlistenDatabase from './chains/unlistenDatabase';
import receiveDataFromFirebase from './chains/receiveDataFromFirebase';
import deleteChildFromFirebase from './chains/deleteChildFromFirebase';
// import postItem from './chains/postItem';
// import putItem from './chains/putItem';
import deleteItemChain from './chains/deleteItemChain';

import editCurrentItemBody from './chains/editCurrentItemBody';
import submitItemBody from './chains/submitItemBody';

export default module => {
  module.addState({
    items: {},
    current_item: {body: ''},
    is_saving: false,
    error: null,
  });

  module.addSignals({
    pageLoaded: listenDatabase,
    pageUnloaded: unlistenDatabase,
    firebaseChildAdded: receiveDataFromFirebase,
    firebaseChildRemoved: deleteChildFromFirebase,
    firebaseChildChanged: receiveDataFromFirebase,

    currentItemChanged: {
      chain: editCurrentItemBody,
      immediate: true
    },
    currentItemSubmitted: submitItemBody,

    // updateItemTitleSubmitted: submitUpdateItemTitle,
    removeItemClicked: deleteItemChain,
    // removeAllItemsClicked: removeAllItems,
    // itemClicked: setCurrentItemActive,

  });
};
