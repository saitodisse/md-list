import notificationItemRemoved from '../actions/notificationItemRemoved';
import removeItem from '../actions/removeItem';
import elasticsearchDeleteData from '../../../modules/Search/actions/elasticsearchDeleteData';
import { when, copy } from 'cerebral/operators';

const deleteChildFromFirebase = [
  notificationItemRemoved,
  removeItem,

  when('state:search.enabled'), {
    true: [
      elasticsearchDeleteData, {
        success: [
          copy('input:status', 'state:search.status'),
        ],
        error: [
          copy('input:status', 'state:search.status'),
          copy('input:result.error', 'state:search.error'),
        ]
      },
    ],
    false: []
  },

];

export default deleteChildFromFirebase;
