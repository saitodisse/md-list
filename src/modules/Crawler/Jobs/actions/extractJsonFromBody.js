import _ from 'lodash/fp';

export default function extractJsonFromBody({ input, state }) {
  const {
    id,
    name,
    selector,
    data_type,
    js_type,
    fields,
    created_at,
  } = state.get('jobs.json_extraction_fields.selected');

  const {
    body,
  } = state.get('jobs.body_results.selected');

  var doc = document.implementation.createHTMLDocument("new_document");
  doc.documentElement.innerHTML = body;

  const j_result = doc.querySelectorAll(selector);
  window.j_result = j_result;
  let counter = 0;
  const titles = _.reduce((prev, curr) => {
    prev[counter++].id = {
      id: counter,
      value: curr.innerText,
      href: curr.parentElement.href,
    };
    return prev;
  }, {}, j_result);

  state.set('jobs.json_results.list', titles);
}