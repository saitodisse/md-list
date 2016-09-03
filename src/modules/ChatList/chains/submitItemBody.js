import {set, copy} from 'cerebral/operators';
import updateItem from '../actions/updateItem.js';

const submitItemBody = [
  // We set the app is saving mode to disable the input
  set('state:chatList.is_saving', true),
  // We reset the error
  set('state:chatList.error', null),
  // We post the item to the server
  updateItem, {
    success: [
      // The app goes back into normal state,
      // enabling the input again
      set('state:chatList.is_saving', false),
      set('state:chatList.current_item', {body: ''}),
    ],
    error: [
      // The app goes back into normal state,
      // enabling the input again
      set('state:chatList.is_saving', false),
      // We set an error to display
      copy('input:code', 'state:chatList.error'),
    ]
  },
];

export default submitItemBody;
