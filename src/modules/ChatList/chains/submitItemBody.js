import {set, copy} from 'cerebral/operators';
import updateItem from '../actions/updateItem.js';

const submitItemBody = [
  // We set the app is saving mode to disable the input
  set('state:main.is_saving', true),
  // We reset the error
  set('state:main.error', null),
  // We post the item to the server
  updateItem, {
    success: [
      // The app goes back into normal state,
      // enabling the input again
      set('state:main.is_saving', false),
      set('state:chatList.current_item', {body: ''}),
    ],
    error: [
      // The app goes back into normal state,
      // enabling the input again
      set('state:main.is_saving', false),
      // We set an error to display
      copy('input:code', 'state:main.error'),
    ]
  },
];

export default submitItemBody;
