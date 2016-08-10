function updateItem({input, state}) {
  const lastIndex = state.get('listApp.items').length - 1;
  state.merge(`listApp.items.${lastIndex}`, input.result)
}

export default updateItem;
