import { copy } from 'cerebral/operators';
import elasticsearchSearchItems from '../actions/elasticsearchSearchItems';
import getResults from '../actions/getResults';

const elasticsearchQueryItems = [
  elasticsearchSearchItems, {
    success: [
      getResults,
    ],
    error: [
      copy('input:status', 'state:search.status'),
      copy('input:result.error', 'state:search.error'),
    ]
  },
];

export default elasticsearchQueryItems;
