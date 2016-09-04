import {set} from 'cerebral/operators';

const cancelEdit = [
  set('state:chatList.current_item', { body: '' }),
];

export default cancelEdit;
