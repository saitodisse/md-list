import notificationItemRemoved from '../actions/notificationItemRemoved';
import removeItem from '../actions/removeItem';

const deleteChildFromFirebase = [
  notificationItemRemoved,
  removeItem,
];

export default deleteChildFromFirebase;
