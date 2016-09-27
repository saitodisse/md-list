import {set} from 'cerebral/operators';
import unlistenChanges from '../actions/unlistenChanges';

const stopListeningFirebase = [
  unlistenChanges,
  set('state:members.is_listening_firebase', false),
];

export default stopListeningFirebase;
