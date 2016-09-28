import mergeItem from '../actions/mergeItem';
import notificationItemAdd from '../actions/notificationItemAdd';
import {debounce} from 'cerebral/operators';

import elasticsearchPutData from '~/modules/ElasticSearch/actions/elasticsearchPutData';
import { copy } from 'cerebral/operators';

const receiveDataFromFirebase = [
  mergeItem,

  elasticsearchPutData, {
    success: [
      copy('input:status', 'state:elasticsearch.status'),
    ],
    error: [
      copy('input:status', 'state:elasticsearch.status'),
      copy('input:result.error', 'state:elasticsearch.error'),
    ]
  },

  // This action holds until
  // A: 200ms has passed
  //  - "accepted" is run
  // B: the action is triggered again
  //  - "discarded" is run on the previous execution
  //  - the action on new execution is holding again
  debounce(200), {
    accepted: [
      notificationItemAdd,
    ],
    discarded: []
  },

];

export default receiveDataFromFirebase;
