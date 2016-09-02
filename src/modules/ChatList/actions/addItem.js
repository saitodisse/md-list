function addItem({state, output, input}) {
  const {key, value} = input;
  const newItem = {};
  newItem[key] = value;
  newItem[key].id = key;

  state.merge('chatList.items', newItem);
  output({id: key});
}

export default addItem;
