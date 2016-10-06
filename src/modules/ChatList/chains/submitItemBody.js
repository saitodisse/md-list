import { set, copy } from 'cerebral/operators';
import updateItem from '../actions/updateItem.js';

const submitItemBody = [
  // We set the app is saving mode to disable the input
  set('state:main.is_saving', true),
  // We reset the error
  set('state:main.error', null),
  set('state:chatList.submiting_item', true),
  // We post the item to the server
  updateItem, {
    create_success: [
      // The app goes back into normal state,
      // enabling the input again
      set('state:chatList.last_operation_was_update', false),
      set('state:main.is_saving', false),
      set('state:chatList.current_item', { body: '' }),
      set('state:chatList.submiting_item', false),
    ],
    update_success: [
      // The app goes back into normal state,
      // enabling the input again
      set('state:chatList.last_operation_was_update', true),
      set('state:main.is_saving', false),
      set('state:chatList.current_item', { body: '' }),
      set('state:chatList.submiting_item', false),
    ],
    error: [
      // The app goes back into normal state,
      // enabling the input again
      set('state:main.is_saving', false),
      // We set an error to display
      copy('input:error', 'state:main.error'),
    ]
  },
];

export default submitItemBody;
