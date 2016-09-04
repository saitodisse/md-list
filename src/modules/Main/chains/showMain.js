import {set} from 'cerebral/operators';
import {PAGE_EMPTY} from '~/constants';

const showMain = [
  set('state:main.current_page', PAGE_EMPTY),
];

export default showMain;
