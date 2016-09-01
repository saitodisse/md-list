// chains
import listenDatabase from './chains/listenDatabase';
import receiveDataFromFirebase from './chains/receiveDataFromFirebase';
// import deleteSomeData from './chains/deleteSomeData';
import postItem from './chains/postItem';
import putItem from './chains/putItem';
import deleteItem from './chains/deleteItem';

export default module => {
  module.addState({
    list: {},
  });

  module.addSignals({
    pageLoaded: listenDatabase,
    dataReceived: receiveDataFromFirebase,
    deleteClicked: deleteItem,
    postClicked: postItem,
    putClicked: putItem,
  });
};
