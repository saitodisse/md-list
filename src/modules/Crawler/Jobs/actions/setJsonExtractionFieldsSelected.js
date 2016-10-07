export default function setJsonExtractionFieldsSelected({ input, state }) {
  const id = state.get('jobs.json_extraction_fields.selected.id');
  const selected = state.get(`jobs.json_extraction_fields.list.${id}`);
  state.set('jobs.json_extraction_fields.selected', selected);
}
