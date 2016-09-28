import {set} from 'cerebral/operators';
import {PAGE_SEARCH} from '~/constants';

const showSearch = [
  set('state:main.current_page', PAGE_SEARCH),
];

export default showSearch;
