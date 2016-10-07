import firebase from 'firebase';

function addFirebaseQueueJob({ input, state, output }) {
  const id = state.get('jobs.job.selected.id');
  const job_name = state.get('jobs.job.selected.job_name');
  const initial_spec_state = state.get('jobs.job.selected.initial_spec_state');
  const url = state.get('jobs.job.selected.url');

  const key = firebase.database().ref('queue/tasks').push().key;

  const updates = {};
  updates[ `queue/tasks/${key}` ] = {
    _state: initial_spec_state,
    id,
    job_name,
    url,
    created_at: firebase.database.ServerValue.TIMESTAMP,
  };

  firebase.database().ref().update(updates)
    .then(output.success)
    .catch(output.error);
}
addFirebaseQueueJob.async = true;
addFirebaseQueueJob.outputs = [ 'success', 'error' ];

export default addFirebaseQueueJob;