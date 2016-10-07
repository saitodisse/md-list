export default function setCurrentItem({ input, state }) {
  const id = state.get('jobs.job.selected.id');
  const job = state.get(`jobs.job.list.${id}`);
  state.set('jobs.job.selected.job_name', job.job_name);
  state.set('jobs.job.selected.initial_spec_state', job.initial_spec_state);
  state.set('jobs.job.selected.url', job.url);
}
