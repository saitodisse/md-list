function toggleCurrentItem({ input, state }) {
  const itemPath = `chatList.items.${input.id}`;
  const selectedItem = state.get(itemPath);

  const currentItemStored = state.get('chatList.current_item');
  const isEmpty = (currentItemStored.body.length === 0);
  const hasSameId = (currentItemStored.id === input.id);
  if (isEmpty || !hasSameId) {
    state.set('chatList.current_item', selectedItem);
  } else if (hasSameId) {
    state.set('chatList.current_item', { body: '' });
  }
}

export default toggleCurrentItem;
