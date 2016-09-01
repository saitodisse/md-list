function addItem({state, output, input}) {
  const {key, value} = input;
  const newItem = {};
  newItem[key] = value;

  state.merge('chat.list', newItem);
  output({id: key});
}

export default addItem;
