import {set} from 'cerebral/operators';
import removeItem from '../actions/removeItem';
import removeItemFromServer from '../actions/removeItemFromServer';

export default [
  removeItem,

  removeItemFromServer, {
    success: [
      set('state:listApp.is_saving', false),
      // Clear current item
      set('state:listApp.current_item.id', null),
    ],
    error: [
      set('state:listApp.is_saving', false),
      set('state:listApp.error', 'Removing item from server has failed')
    ]
  },
];
