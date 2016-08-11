// import {set, delay} from 'cerebral/operators';
import removeItem from '../actions/removeItem.js';
import removeItemFromServer from '../actions/removeItem.js';

export default [
  removeItem,
  removeItemFromServer, {
    // success: [
    //   // We merge in the ID returned
    //   // from the server
    //   updateItem,
    //   // The app goes back into normal state,
    //   // enabling the input again
    //   set('state:listApp.isSaving', false),
    //   // The item is not new anymore
    //   ...delay(3000, [
    //     updateItemRemoveIsNew
    //   ]),
    // ],
    // error: [
    //   // The app goes back into normal state,
    //   // enabling the input again
    //   set('state:listApp.isSaving', false),
    //   // We remove the item since it
    //   // failed
    //   removeItem,
    //   // We set an error to display
    //   set('state:listApp.error', 'Adding item failed on server, removing it')
    // ]
  },
];
