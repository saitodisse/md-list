function removeItem({ input, state }) {
  state.unset(`chatList.items.${input.key}`);
}

export default removeItem;
