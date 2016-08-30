function putItem({state, output, services}) {
  const current_item = state.get('listApp.current_item');

  services.http.put(`/items/${current_item.id}`, current_item)
    .then(output.success)
    .catch(output.error);
}

putItem.async = true;
putItem.outputs = ['success', 'error'];

export default putItem;
