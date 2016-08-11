import {set} from 'cerebral/operators';
import removeItem from '../actions/removeItem';
import removeItemFromServer from '../actions/removeItemFromServer';

export default [
  removeItem,

  removeItemFromServer, {
    success: [
      set('state:listApp.isSaving', false),
    ],
    error: [
      set('state:listApp.isSaving', false),
      set('state:listApp.error', 'Removing item from server has failed')
    ]
  },
];
