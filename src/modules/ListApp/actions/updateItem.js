function updateItem({input, state}) {
  const itemPath = `listApp.items.${input.id}`;
  const item = state.get(itemPath);
  const currentTitle = state.get('listApp.currentItem.title');
  state.merge(itemPath, {...item, title: currentTitle, $isSaved: true});
}

export default updateItem;
