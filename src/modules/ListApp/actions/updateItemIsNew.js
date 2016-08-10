function updateItemIsNew({state, output, services}) {
  const item = state.get('listApp.items')[0]
  state.merge(`listApp.items.0`, {...item, $isNew: true});
}

export default updateItemIsNew;
