function toggleCurrentItem({input, state}) {
  const itemPath = `listApp.items.${input.id}`;
  const currentItem = state.get(itemPath);

  const currentItemStored = state.get('listApp.currentItem');
  const isEmpty = (currentItemStored.title.length === 0);
  const hasSameId = (currentItemStored.id === input.id);
  if (isEmpty || !hasSameId) {
    state.set('listApp.currentItem', currentItem);
  } else if (hasSameId) {
    state.set('listApp.currentItem', {title: ''});
  }
}

export default toggleCurrentItem;
