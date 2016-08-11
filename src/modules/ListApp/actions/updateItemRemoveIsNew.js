function updateItemRemoveIsNew({input, state}) {
  const itemPath = `listApp.items.${input.id}`;
  const item = state.get(itemPath);
  state.merge(itemPath, {...item, $isNew: false});
}

export default updateItemRemoveIsNew;
