export default function clearCurrentItem({ state }) {
  state.set('jobs.id', null);
  state.set('jobs.job_name', '');
  state.set('jobs.initial_spec_state', '');
  state.set('jobs.url', '');
}