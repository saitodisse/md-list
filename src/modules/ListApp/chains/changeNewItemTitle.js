import {copy} from 'cerebral/operators';

export default [
  copy('input:title', 'state:listApp.current_item.title')
];
