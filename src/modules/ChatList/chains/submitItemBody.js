import {set} from 'cerebral/operators';
import postItem from '../actions/postItem.js';

const submitItemBody = [
  // We set the app is saving mode to disable the input
  set('state:chatList.is_saving', true),
  // We reset the error
  set('state:chatList.error', null),
  // We post the item to the server
  postItem, {
    success: [
      // The app goes back into normal state,
      // enabling the input again
      set('state:chatList.is_saving', false),
      set('state:chatList.current_item.body', ''),
    ],
    error: [
      // The app goes back into normal state,
      // enabling the input again
      set('state:chatList.is_saving', false),
      // We set an error to display
      set('state:chatList.error', 'Adding item failed on server, removing it')
    ]
  },
];

export default submitItemBody;
