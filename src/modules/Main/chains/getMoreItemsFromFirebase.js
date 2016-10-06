import { set, copy } from 'cerebral/operators';
import getMoreData from '../actions/getMoreData';
import setMoreItemsKeys from '../actions/setMoreItemsKeys';
// import listenChanges from '../actions/listenChanges';

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
