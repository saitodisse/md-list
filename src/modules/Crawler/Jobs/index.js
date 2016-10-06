import firebase from 'firebase';
import { copy } from 'cerebral/operators';
import firebaseMergeItem from '../../Members/actions/firebaseMergeItem';
import firebaseRemoveItem from '../../Members/actions/firebaseRemoveItem';

function setCurrentItem({ input, state }) {
  const job_id = state.get('jobs.job_id');
  const jobs_list_item = state.get(`jobs.jobs_list.${job_id}`);
  state.set('jobs.job_name', jobs_list_item.job_name);
  state.set('jobs.initial_spec_state', jobs_list_item.initial_spec_state);
  state.set('jobs.url', jobs_list_item.url);
}

function clearCurrentItem({ state }) {
  state.set('jobs.job_id', null);
  state.set('jobs.job_name', '');
  state.set('jobs.initial_spec_state', '');
  state.set('jobs.url', '');
}

function setBodyResultCurrentItem({ input, state }) {
  const body_result_id = state.get('jobs.body_result_id');
  const body_results_item = state.get(`jobs.body_results.${body_result_id}`);
  state.set('jobs.body_result_body', body_results_item.body);
}

function clearBodyResultCurrentItem({ state }) {
  state.set('jobs.job_id', null);
  state.set('jobs.job_name', '');
  state.set('jobs.initial_spec_state', '');
  state.set('jobs.url', '');
}

function addFirebaseQueueJob({ input, state, output }) {
  const job_id = state.get('jobs.job_id');
  const job_name = state.get('jobs.job_name');
  const initial_spec_state = state.get('jobs.initial_spec_state');
  const url = state.get('jobs.url');

  const key = firebase.database().ref('queue/tasks').push().key;
  const updates = {};
  updates[ `queue/tasks/${key}` ] = {
    _state: 'crawler_web_page',
    url: 'http://jsonplaceholder.typicode.com/users',
    created_at: firebase.database.ServerValue.TIMESTAMP,
  };

  firebase.database().ref().update(updates)
    .then(output.success)
    .catch(output.error);
}
addFirebaseQueueJob.async = true;
addFirebaseQueueJob.outputs = [ 'success', 'error' ];


export default module => {
  module.addState({
    crawler: {
      body_results: {

      }
    }
  });

  module.addSignals({
    inputJobNameChanged: {
      chain: [ copy('input:job_name', 'state:jobs.job_name') ],
      immediate: true
    },
    inputInitialSpecStateChanged: {
      chain: [ copy('input:initial_spec_state', 'state:jobs.initial_spec_state') ],
      immediate: true
    },
    inputUrlChanged: {
      chain: [ copy('input:url', 'state:jobs.url') ],
      immediate: true
    },
    rowClicked: [
      copy('input:job_id', 'state:jobs.job_id'),
      setCurrentItem,
    ],
    body_results_rowClicked: [
      copy('input:body_result_id', 'state:jobs.body_result_id'),
      setBodyResultCurrentItem,
    ],
    createNewJobClicked: [
      clearBodyResultCurrentItem,
    ],
    runJobClicked: [
      addFirebaseQueueJob, {
        success: [],
        error: [],
      }
    ],

    bodyResultChildAdded: [ firebaseMergeItem('jobs.body_results') ],
    bodyResultChildChanged: [ firebaseMergeItem('jobs.body_results') ],
    bodyResultChildRemoved: [ firebaseRemoveItem('jobs.body_results') ],

  });
};
