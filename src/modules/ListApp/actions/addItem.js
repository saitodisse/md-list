function addItem({state}) {
  state.push('listApp.items', {
    title: state.get('listApp.newItemTitle')
  })
}

export default addItem
