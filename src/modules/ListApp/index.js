import changeNewItemTitle from './chains/changeNewItemTitle';
import submitNewItemTitle from './chains/submitNewItemTitle';
import getDataFromServer from './chains/getDataFromServer';

export default module => {
  module.addState({
    items: {},
    newItemTitle: '',
    isSaving: false,
    error: null
  });

  module.addSignals({
    newItemTitleChanged: {
      chain: changeNewItemTitle,
      immediate: true
    },
    newItemTitleSubmitted: submitNewItemTitle,
    pageLoaded: getDataFromServer,
  });
};
