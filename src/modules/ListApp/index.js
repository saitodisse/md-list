import changeNewItemTitle from './chains/changeNewItemTitle';
import submitNewItemTitle from './chains/submitNewItemTitle';
import getDataFromServer from './chains/getDataFromServer';
import removeItem from './chains/removeItem';
import removeAllItems from './chains/removeAllItems';

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
    removeItemClicked: removeItem,
    removeAllItemsClicked: removeAllItems,
  });
};
