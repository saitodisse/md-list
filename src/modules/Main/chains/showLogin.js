import {set} from 'cerebral/operators';
import {PAGE_LOGIN} from '~/constants';

export default [
  set('state:main.current_page', PAGE_LOGIN),
];
