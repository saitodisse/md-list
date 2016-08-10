function updateItemRemoveIsNew({input, state}) {
  const item = state.findWhere('listApp.items', {id: input.result.id})
  state.merge(`listApp.items.0`, {...item, $isNew: false});
}

export default updateItemRemoveIsNew;
