import { set, copy } from 'cerebral/operators';
import deleteItem from '../actions/deleteItem';
import removeItem from '../actions/removeItem';

const deleteItemChain = [
  // We set the app is saving mode to disable the input
  set('state:main.is_saving', true),
  // We reset the error
  set('state:main.error', null),
  // We post the item to the server
  deleteItem, {
    success: [
      removeItem,
      set('state:main.is_saving', false),
    ],
    error: [
      set('state:main.is_saving', false),
      copy('input:error', 'state:main.error'),
    ]
  },
];

export default deleteItemChain;
