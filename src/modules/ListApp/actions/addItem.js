function addItem({state}) {
  state.unshift('listApp.items', {
    title: state.get('listApp.newItemTitle')
  })
}

export default addItem
