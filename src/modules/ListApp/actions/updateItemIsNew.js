function updateItemIsNew({state, output, services}) {
  const lastIndex = state.get('listApp.items').length - 1;
  const item = state.get('listApp.items')[lastIndex]
  state.merge(`listApp.items.${lastIndex}`, {...item, $isNew: true});
}

export default updateItemIsNew;
