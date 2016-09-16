// chains
import receiveDataFromFirebase from './chains/receiveDataFromFirebase';
import deleteChildFromFirebase from './chains/deleteChildFromFirebase';
import deleteItemChain from './chains/deleteItemChain';

import setBody from './chains/setBody';
import submitItemBody from './chains/submitItemBody';
import setCurrentItem from './chains/setCurrentItem';
import cancelEdit from './chains/cancelEdit';

export default module => {
  module.addState({
    items: {},
    current_item: {body: ''},
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
  });
};
