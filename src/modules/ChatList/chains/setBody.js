import {copy} from 'cerebral/operators';

export default [
  copy('input:body', 'state:chatList.current_item.body'),
];
