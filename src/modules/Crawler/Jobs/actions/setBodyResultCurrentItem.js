export default function setBodyResultCurrentItem({ input, state }) {
  const id = state.get('jobs.body_results.selected.id');
  const body_results_item = state.get(`jobs.body_results.list.${id}`);
  state.set('jobs.body_results.selected', body_results_item);
}