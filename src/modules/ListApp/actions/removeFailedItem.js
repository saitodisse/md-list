function removeFailedItem({input, state}) {
  const itemPath = `listApp.items.${input.id}`;
  state.unset(itemPath);
}

export default removeFailedItem;
