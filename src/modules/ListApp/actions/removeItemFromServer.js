
function removeItemFromServer({input, output, services}) {
  services.http.delete(`/items/${input.id}`)
    .then(output.success)
    .catch(output.error);
}

removeItemFromServer.async = true;
removeItemFromServer.outputs = ['success', 'error'];

export default removeItemFromServer;
