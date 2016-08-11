import {set, delay} from 'cerebral/operators';
import addItem from '../actions/addItem.js';
import postItem from '../actions/postItem.js';
import removeFailedItem from '../actions/removeFailedItem.js';
import updateItem from '../actions/updateItem.js';
import updateItemIsNew from '../actions/updateItemIsNew.js';
import updateItemRemoveIsNew from '../actions/updateItemRemoveIsNew.js';

export default [
  // First we optimistically add the item
  // to the items list
  addItem,
  // We empty out the input
  set('state:listApp.newItemTitle', ''),
  // We set the app is saving mode to
  // disable the input
  set('state:listApp.isSaving', true),
  // We reset the error
  set('state:listApp.error', null),
  // Set item as a new item
  updateItemIsNew,
  // We post the item to the server
  postItem, {
    success: [
      // We merge in the ID returned
      // from the server
      updateItem,
      // The app goes back into normal state,
      // enabling the input again
      set('state:listApp.isSaving', false),
      // The item is not new anymore
      ...delay(1000, [
        updateItemRemoveIsNew
      ]),
    ],
    error: [
      // The app goes back into normal state,
      // enabling the input again
      set('state:listApp.isSaving', false),
      // We remove the item since it
      // failed
      removeFailedItem,
      // We set an error to display
      set('state:listApp.error', 'Adding item failed on server, removing it')
    ]
  },
];
