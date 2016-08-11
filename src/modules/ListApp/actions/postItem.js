function postItem({input, state, output, services}) {
  const itemPath = `listApp.items.${input.id}`;
  const item = state.get(itemPath);

  services.http.post('/items', item)
    .then(output.success)
    .catch(output.error)
}

postItem.async = true
postItem.outputs = ['success', 'error'];

export default postItem;
