import mergeItem from '../actions/mergeItem';
import notificationItemAdd from '../actions/notificationItemAdd';
import {debounce} from 'cerebral/operators';

const receiveDataFromFirebase = [
  mergeItem,

  // This action holds until
  // A: 200ms has passed
  //  - "accepted" is run
  // B: the action is triggered again
  //  - "discarded" is run on the previous execution
  //  - the action on new execution is holding again
  debounce(200), {
    accepted: [
      notificationItemAdd,
    ],
    discarded: []
  },

];

export default receiveDataFromFirebase;
