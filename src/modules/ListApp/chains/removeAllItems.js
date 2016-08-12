import {set} from 'cerebral/operators';
import removeAllItems from '../actions/removeAllItems';
import removeAllItemsFromServer from '../actions/removeAllItemsFromServer';

export default [
  removeAllItemsFromServer, {
    success: [
      // The app goes back into normal state,
      // enabling the input again
      set('state:listApp.isSaving', false),
      removeAllItems,
      // Clear current item
      set('state:listApp.currentItem.id', null),
    ],
    error: [
      // The app goes back into normal state,
      // enabling the input again
      set('state:listApp.isSaving', false),
      // We set an error to display
      set('state:listApp.error', 'Removing item from server has failed')
    ]
  },
];
