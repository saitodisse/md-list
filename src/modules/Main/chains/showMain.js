import {set} from 'cerebral/operators';
import {PAGE_EMPTY} from '~/constants';

export default [
  set('state:main.current_page', PAGE_EMPTY),
];
