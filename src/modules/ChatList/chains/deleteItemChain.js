import {set} from 'cerebral/operators';
import deleteItem from '../actions/deleteItem';
import removeItem from '../actions/removeItem';

const deleteItemChain = [
  // We set the app is saving mode to disable the input
  set('state:chatList.is_saving', true),
  // We reset the error
  set('state:chatList.error', null),
  // We post the item to the server
  deleteItem, {
    success: [
      removeItem,
      set('state:chatList.is_saving', false),
    ],
    error: [
      set('state:chatList.is_saving', false),
      set('state:chatList.error', 'Adding item failed on server, removing it')
    ]
  },
];

export default deleteItemChain;
