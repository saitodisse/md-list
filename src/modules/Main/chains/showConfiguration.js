import {set} from 'cerebral/operators';
import {PAGE_CONFIGURATION} from '~/constants';

const showMain = [
  set('state:main.current_page', PAGE_CONFIGURATION),
];

export default showMain;
