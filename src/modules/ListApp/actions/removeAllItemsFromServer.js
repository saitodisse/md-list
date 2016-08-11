import R from 'ramda';

function removeItemFromServer({state, output, services}) {
  const items = state.get('listApp.items');
  const promises = R.map(item => Promise.resolve(services.http.delete(`/items/${item.id}`)), items);
  const promisesArray = R.map((pair) => pair[1], R.toPairs(promises));
  Promise.all(promisesArray)
    .then((result) => {
      /**/console.log({result});/* -debug- */
      return output.success(result);
    })
    .catch((err) => {
      /**/console.log({err});/* -debug- */
      return output.error(err);
    });
}

removeItemFromServer.async = true;
removeItemFromServer.outputs = ['success', 'error'];

export default removeItemFromServer;
