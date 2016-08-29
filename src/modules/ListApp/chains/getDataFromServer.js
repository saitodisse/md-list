import {set} from 'cerebral/operators';
import getItems from '../actions/getItems.js';
import updateAllItems from '../actions/updateAllItems.js';

export default [
  // Get items from server
  getItems, {
    success: [
      updateAllItems,
      set('state:listApp.is_saving', false),
    ],
    error: [
      set('state:listApp.is_saving', false),
      set('state:listApp.error', 'Can\'t get items from server')
    ]
  },
];
