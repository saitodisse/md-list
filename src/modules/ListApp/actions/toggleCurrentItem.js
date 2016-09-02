function toggleCurrentItem({input, state}) {
  const itemPath = `listApp.items.${input.id}`;
  const selectedItem = state.get(itemPath);

  const currentItemStored = state.get('listApp.current_item');
  const isEmpty = (currentItemStored.title.length === 0);
  const hasSameId = (currentItemStored.id === input.id);
  if (isEmpty || !hasSameId) {
    state.set('listApp.current_item', selectedItem);
  } else if (hasSameId) {
    state.set('listApp.current_item', {title: ''});
  }
}

export default toggleCurrentItem;
