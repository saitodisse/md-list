import {set} from 'cerebral/operators';
import {PAGE_LOGIN} from '~/constants';

export default [
  set('state:main.currentPage', PAGE_LOGIN),
];
