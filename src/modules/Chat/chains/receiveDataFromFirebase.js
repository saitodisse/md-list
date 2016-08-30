import {copy} from 'cerebral/operators';

export default [
  copy('input:value', 'state:chat.some_data'),
];
