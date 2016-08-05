function removeFailedItem({state}) {
  state.shift('listApp.items')
}

export default removeFailedItem;
