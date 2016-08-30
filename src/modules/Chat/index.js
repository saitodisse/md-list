// chains
import listenDatabase from './chains/listenDatabase';
import receiveDataFromFirebase from './chains/receiveDataFromFirebase';

export default module => {
  module.addState({
    some_data: null,
  });

  module.addSignals({
    pageLoaded: listenDatabase,
    dataReceived: receiveDataFromFirebase,
  });
};
