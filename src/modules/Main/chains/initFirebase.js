import { set, copy } from 'cerebral/operators';
import getInitialData from '../actions/getInitialData';
import listenChanges from '../actions/listenChanges';
import setItemsKeys from '../actions/setItemsKeys';
import { addLoadingStatus } from '~/helpers/operators.js';

const initFirebase = [
  addLoadingStatus('Started', 'initFirebase', 'start'),
  set('state:main.is_saving', true),
  set('state:main.error', null),
  addLoadingStatus('getInitialData', 'initFirebase', 'log'),
  getInitialData, {
    success: [
      addLoadingStatus('getInitialData:setItemsKeys', 'initFirebase', 'log'),
      setItemsKeys,
    ],
    error: [
      copy('input:error', 'state:main.error'),
    ]
  },
  set('state:main.is_saving', false),

  addLoadingStatus('listenChanges', 'initFirebase', 'log'),
  listenChanges,

  set('state:main.all_loaded', true),

  addLoadingStatus('Finished!', 'initFirebase', 'end'),
];

export default initFirebase;
