function postItem({state, output, services}) {
  const item = state.get('listApp.items')[state.get('listApp.items').length - 1]

  services.http.post('/items', item)
    .then(output.success)
    .catch(output.error)
}

postItem.async = true
postItem.outputs = ['success', 'error'];

export default postItem;
