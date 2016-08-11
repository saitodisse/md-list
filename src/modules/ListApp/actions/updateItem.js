function updateItem({input, state}) {
  const itemPath = `listApp.items.${input.id}`;
  const item = state.get(itemPath);
  state.merge(itemPath, {...item, $isSaved: true});
}

export default updateItem;
