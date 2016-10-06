function mergeItem({ state, output, input }) {
  const { key, value } = input;
  const newItem = {};
  newItem[ key ] = value;
  newItem[ key ].id = key;

  state.merge('chatList.items', newItem);
  output({
    id: key,
    path: 'items',
    key,
    data: value,
  });
}

export default mergeItem;
