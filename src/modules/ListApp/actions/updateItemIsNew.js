function updateItemIsNew({input, state}) {
  const itemPath = `listApp.items.${input.id}`;
  const item = state.get(itemPath);
  state.merge(itemPath, {...item, $isNew: true});
}

export default updateItemIsNew;
