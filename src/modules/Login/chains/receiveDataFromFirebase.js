import {copy} from 'cerebral/operators';

export default [
  copy('input:value', 'state:login.some_data'),
];
