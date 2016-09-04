import {set} from 'cerebral/operators';
import {PAGE_LOGIN} from '~/constants';

const showLogin = [
  set('state:main.current_page', PAGE_LOGIN),
];

export default showLogin;
