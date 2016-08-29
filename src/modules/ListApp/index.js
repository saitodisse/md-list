// router

// chains
import changeNewItemTitle from './chains/changeNewItemTitle';
import submitNewItemTitle from './chains/submitNewItemTitle';
import submitUpdateItemTitle from './chains/submitUpdateItemTitle';
import getDataFromServer from './chains/getDataFromServer';
import removeItem from './chains/removeItem';
import removeAllItems from './chains/removeAllItems';
import setCurrentItemActive from './chains/setCurrentItemActive';
import cancelEdit from './chains/cancelEdit';

export default module => {
  module.addState({
    items: {},
    isSaving: false,
    error: null,
    currentItem: {title: ''},
  });

  module.addSignals({
    // router

    // chains
    newItemTitleChanged: {
      chain: changeNewItemTitle,
      immediate: true
    },
    newItemTitleSubmitted: submitNewItemTitle,
    updateItemTitleSubmitted: submitUpdateItemTitle,
    pageLoaded: getDataFromServer,
    removeItemClicked: removeItem,
    removeAllItemsClicked: removeAllItems,
    itemClicked: setCurrentItemActive,
    editCanceled: cancelEdit,
  });
};
