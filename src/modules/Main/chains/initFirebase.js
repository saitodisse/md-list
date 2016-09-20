import { set, copy } from 'cerebral/operators';
import getInitialData from '../actions/getInitialData';
import listenChanges from '../actions/listenChanges';
import setItemsKeys from '../actions/setItemsKeys';

const listenDatabase = [
  set('state:main.is_saving', true),
  set('state:main.error', null),
  getInitialData, {
    success: [
      setItemsKeys,
    ],
    error: [
      copy('input:code', 'state:main.error'),
    ]
  },
  set('state:main.is_saving', false),
  listenChanges,
];

export default listenDatabase;