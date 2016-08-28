function putItem({state, output, services}) {
  const currentItem = state.get('listApp.currentItem');

  services.http.put(`/items/${currentItem.id}`, currentItem)
    .then(output.success)
    .catch(output.error);
}

putItem.async = true;
putItem.outputs = ['success', 'error'];

export default putItem;
