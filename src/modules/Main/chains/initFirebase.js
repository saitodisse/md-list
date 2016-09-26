import { set, copy } from 'cerebral/operators';
import getInitialData from '../actions/getInitialData';
import listenChanges from '../actions/listenChanges';
import setItemsKeys from '../actions/setItemsKeys';

const initFirebase = [
  set('state:main.is_saving', true),
  set('state:main.error', null),
  getInitialData, {
    success: [
      setItemsKeys,
    ],
    error: [
      copy('input:error', 'state:main.error'),
    ]
  },
  set('state:main.is_saving', false),
  listenChanges,
];

export default initFirebase;
