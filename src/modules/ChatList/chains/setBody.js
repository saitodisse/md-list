import {copy} from 'cerebral/operators';

const setBody = [
  copy('input:body', 'state:chatList.current_item.body'),
];

export default setBody;
