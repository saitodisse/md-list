function removeItem({ input, state, output }) {
  state.unset(`chatList.items.${input.key || input.id}`);
  output({
    path: 'items',
    key: input.key,
  });
}

export default removeItem;
