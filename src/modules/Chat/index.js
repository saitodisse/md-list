// chains
import listenDatabase from './chains/listenDatabase';
import receiveDataFromFirebase from './chains/receiveDataFromFirebase';
import postItem from './chains/postItem';
import putItem from './chains/putItem';
import deleteItem from './chains/deleteItem';

export default module => {
  module.addState({
    list: {},
  });

  module.addSignals({
    pageLoaded: listenDatabase,
    firebaseChildAdded: receiveDataFromFirebase,
    firebaseChildRemoved: receiveDataFromFirebase,
    firebaseChildChanged: receiveDataFromFirebase,
    deleteClicked: deleteItem,
    postClicked: postItem,
    putClicked: putItem,
  });
};
