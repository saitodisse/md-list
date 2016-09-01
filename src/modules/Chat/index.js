// chains
import listenDatabase from './chains/listenDatabase';
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
    firebaseChildAdded: receiveDataFromFirebase,
    firebaseChildRemoved: deleteChildFromFirebase,
    firebaseChildChanged: receiveDataFromFirebase,
    deleteClicked: deleteItem,
    postClicked: postItem,
    putClicked: putItem,
  });
};
