import {set} from 'cerebral/operators';
import {PAGE_CHAT} from '~/constants';

export default [
  set('state:main.current_page', PAGE_CHAT),
];
