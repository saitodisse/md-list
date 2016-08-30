function setRenderedItem({input, state}) {
  const itemPath = `listApp.items.${input.id}`;
  state.merge(itemPath, {$isRendered: true});
}

export default setRenderedItem;
