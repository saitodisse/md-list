function removeFailedItem({state}) {
  state.pop('listApp.items')
}

export default removeFailedItem;
