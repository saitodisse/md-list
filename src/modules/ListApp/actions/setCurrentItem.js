function setCurrentItem({input, state, output}) {
  const itemPath = `listApp.items.${input.id}`;
  const currentItem = state.get(itemPath);
  state.set('listApp.currentItem', currentItem);
}

export default setCurrentItem;
