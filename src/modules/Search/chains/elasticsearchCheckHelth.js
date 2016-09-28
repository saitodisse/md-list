import elasticsearchGetHelth from '../actions/elasticsearchGetHelth';
import { set, copy } from 'cerebral/operators';

const elasticsearchCheckHelth = [
  elasticsearchGetHelth, {
    success: [
      copy('input:status', 'state:search.status'),
      set('state:search.enabled', true),
    ],
    error: [
      copy('input:status', 'state:search.status'),
      copy('input:result.error', 'state:search.error'),
      set('state:search.enabled', false),
    ]
  },
];

export default elasticsearchCheckHelth;
