function removeItem({state}) {
  const itemPath = 'listApp.items';
  state.set(itemPath, {});
}

export default removeItem;
