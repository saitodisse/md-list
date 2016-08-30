// chains
import listenDatabase from './chains/listenDatabase';
import receiveDataFromFirebase from './chains/receiveDataFromFirebase';
// import deleteSomeData from './chains/deleteSomeData';
import postItem from './chains/postItem';

export default module => {
  module.addState({
    list: {},
  });

  module.addSignals({
    pageLoaded: listenDatabase,
    dataReceived: receiveDataFromFirebase,
    deleteClicked: postItem,
    postClicked: postItem,
    putClicked: postItem,
  });
};
