import elasticsearchGetHelth from '../actions/elasticsearchGetHelth';
import { set, copy } from 'cerebral/operators';

const elasticsearchCheckHelth = [
  elasticsearchGetHelth, {
    success: [
      copy('input:status', 'state:elasticsearch.status'),
      set('state:elasticsearch.enabled', true),
    ],
    error: [
      copy('input:status', 'state:elasticsearch.status'),
      copy('input:result.error', 'state:elasticsearch.error'),
      set('state:elasticsearch.enabled', false),
    ]
  },
];

export default elasticsearchCheckHelth;
