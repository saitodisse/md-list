import {set} from 'cerebral/operators';
import {PAGE_LIST} from '~/constants';

export default [
  set('state:main.currentPage', PAGE_LIST),
];
