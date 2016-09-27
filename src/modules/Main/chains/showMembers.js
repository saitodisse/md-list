import {set} from 'cerebral/operators';
import {PAGE_MEMBERS} from '~/constants';

const showMain = [
  set('state:main.current_page', PAGE_MEMBERS),
];

export default showMain;
