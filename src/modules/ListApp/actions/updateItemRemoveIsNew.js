function updateItemRemoveIsNew({input, state}) {
  const lastIndex = state.get('listApp.items').length - 1;
  const item = state.findWhere('listApp.items', {id: input.result.id})
  state.merge(`listApp.items.${lastIndex}`, {...item, $isNew: false});
}

export default updateItemRemoveIsNew;
