function updateItem({input, state}) {
  state.merge('listApp.items.0', input.result)
}

export default updateItem;
