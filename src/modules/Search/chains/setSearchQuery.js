import {copy} from 'cerebral/operators';

const setSearchQuery = [
  copy('input:query', 'state:search.query'),
];

export default setSearchQuery;
