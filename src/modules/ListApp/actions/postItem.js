import R from 'ramda';

function postItem({input, state, output, services}) {
  const itemPath = `listApp.items.${input.id}`;

  const item = state.get(itemPath);

  // filter keys
  const keys = R.keys(item);
  const keysFiltered = R.filter(key => key[0] !== '$', keys);
  const itemToSend = R.pick(keysFiltered, item);

  services.http.post('/items', itemToSend)
    .then(output.success)
    .catch(output.error);
}

postItem.async = true;
postItem.outputs = ['success', 'error'];

export default postItem;
