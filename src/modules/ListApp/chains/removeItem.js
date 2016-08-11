import {set} from 'cerebral/operators';
import removeItem from '../actions/removeItem';
import removeItemFromServer from '../actions/removeItemFromServer';

export default [
  removeItem,
  removeItemFromServer, {
    success: [
      // The app goes back into normal state,
      // enabling the input again
      set('state:listApp.isSaving', false),
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
