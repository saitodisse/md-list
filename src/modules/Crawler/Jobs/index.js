import { copy } from 'cerebral/operators';
import firebaseMergeItem from '../../Members/actions/firebaseMergeItem';
import firebaseRemoveItem from '../../Members/actions/firebaseRemoveItem';
import setCurrentItem from './actions/setCurrentItem';
import setBodyResultCurrentItem from './actions/setBodyResultCurrentItem';
import setJsonExtractionFieldsSelected from './actions/setJsonExtractionFieldsSelected';
import clearCurrentItem from './actions/clearCurrentItem';
import addFirebaseQueueJob from './actions/addFirebaseQueueJob';

export default module => {
  module.addState({
    crawler: {
      body_results: {}
    }
  });

  module.addSignals({
    inputJobNameChanged: {
      chain: [ copy('input:job_name', 'state:jobs.job.selected.job_name') ],
      immediate: true
    },
    inputInitialSpecStateChanged: {
      chain: [ copy('input:initial_spec_state', 'state:jobs.job.selected.initial_spec_state') ],
      immediate: true
    },
    inputUrlChanged: {
      chain: [ copy('input:url', 'state:jobs.job.selected.url') ],
      immediate: true
    },
    rowClicked: [
      copy('input:id', 'state:jobs.job.selected.id'),
      setCurrentItem,
    ],
    createNewJobClicked: [
      clearCurrentItem,
    ],
    runJobClicked: [
      addFirebaseQueueJob, {
        success: [],
        error: [],
      }
    ],

    body_results_rowClicked: [
      copy('input:id', 'state:jobs.body_results.selected.id'),
      setBodyResultCurrentItem,
    ],

    json_extraction_fields_rowClicked: [
      copy('input:id', 'state:jobs.json_extraction_fields.selected.id'),
      setJsonExtractionFieldsSelected,
    ],

    bodyResultChildAdded: [ firebaseMergeItem('jobs.body_results.list') ],
    bodyResultChildChanged: [ firebaseMergeItem('jobs.body_results.list') ],
    bodyResultChildRemoved: [ firebaseRemoveItem('jobs.body_results.list') ],

  });
};
