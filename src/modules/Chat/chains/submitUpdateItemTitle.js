import {set, delay} from 'cerebral/operators';
import putItem from '../actions/putItem.js';
import updateItem from '../actions/updateItem.js';
import updateItemIsNew from '../actions/updateItemIsNew.js';
import updateItemRemoveIsNew from '../actions/updateItemRemoveIsNew.js';

export default [
  // Change local title
  updateItem,
  // We empty out the input
  // set('state:listApp.current_item.title', ''),
  // We set the app is saving mode to
  // disable the input
  set('state:listApp.is_saving', true),
  // We reset the error
  set('state:listApp.error', null),
  // Set item as a new item
  updateItemIsNew,
  // We post the item to the server
  putItem, {
    success: [
      // The app goes back into normal state,
      // enabling the input again
      set('state:listApp.is_saving', false),
      // Clear current item
      set('state:listApp.current_item', {title: ''}),
      // The item is not new anymore
      ...delay(3000, [
        updateItemRemoveIsNew
      ]),
    ],
    error: [
      // The app goes back into normal state,
      // enabling the input again
      set('state:listApp.is_saving', false),
      // We set an error to display
      set('state:listApp.error', 'Adding item failed on server, removing it')
    ]
  },
];
