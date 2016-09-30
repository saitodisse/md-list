import { set, copy } from 'cerebral/operators';
import getMoreData from '../actions/getMoreData';
// import listenChanges from '../actions/listenChanges';
import setMoreItemsKeys from '../actions/setMoreItemsKeys';

const getMoreItemsFromFirebase = [
  set('state:main.error', null),
  getMoreData, {
    success: [
      setMoreItemsKeys,
    ],
    error: [
      copy('input:error', 'state:main.error'),
    ]
  },
  // listenChanges,
];

export default getMoreItemsFromFirebase;
