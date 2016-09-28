import notificationItemRemoved from '../actions/notificationItemRemoved';
import removeItem from '../actions/removeItem';

import elasticsearchDeleteData from '~/modules/ElasticSearch/actions/elasticsearchDeleteData';
import { copy } from 'cerebral/operators';

const deleteChildFromFirebase = [
  notificationItemRemoved,
  removeItem,
  elasticsearchDeleteData, {
    success: [
      copy('input:status', 'state:elasticsearch.status'),
    ],
    error: [
      copy('input:status', 'state:elasticsearch.status'),
      copy('input:result.error', 'state:elasticsearch.error'),
    ]
  },

];

export default deleteChildFromFirebase;
