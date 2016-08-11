// import R from 'ramda';

function removeItemFromServer({input, output, services}) {
  // const itemPath = `listApp.items.${input.id}`;
  // const item = state.get(itemPath);
  services.http.delete(`/items/${input.id}`)
    .then(output.success)
    .catch(output.error);
}

removeItemFromServer.async = true;
removeItemFromServer.outputs = ['success', 'error'];

export default removeItemFromServer;
