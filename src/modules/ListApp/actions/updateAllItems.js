function updateAllItems({input, state}) {
  const itemsFromServer = input.result;
  const items = itemsFromServer.reduce((prev, curr) => {
    prev[curr.id] = curr;
    return prev;
  }, {});
  const itemPath = 'listApp.items';
  state.merge(itemPath, items);
}

export default updateAllItems;
