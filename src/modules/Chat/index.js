// chains
import listenDatabase from './chains/listenDatabase';
import unlistenDatabase from './chains/unlistenDatabase';
import receiveDataFromFirebase from './chains/receiveDataFromFirebase';
import deleteChildFromFirebase from './chains/deleteChildFromFirebase';
import postItem from './chains/postItem';
import putItem from './chains/putItem';
import deleteItem from './chains/deleteItem';

export default module => {
  module.addState({
    items: {},
  });

  module.addSignals({
    pageLoaded: listenDatabase,
    pageUnloaded: unlistenDatabase,
    firebaseChildAdded: receiveDataFromFirebase,
    firebaseChildRemoved: deleteChildFromFirebase,
    firebaseChildChanged: receiveDataFromFirebase,
    deleteClicked: deleteItem,
    postClicked: postItem,
    putClicked: putItem,
  });
};
