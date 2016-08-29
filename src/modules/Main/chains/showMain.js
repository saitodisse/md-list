import {set} from 'cerebral/operators';
import {PAGE_EMPTY} from '~/constants';

export default [
  set('state:main.currentPage', PAGE_EMPTY),
];
