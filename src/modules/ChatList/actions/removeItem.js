function removeItem({ input, state }) {
  state.unset(`chatList.items.${input.key || input.id}`);
}

export default removeItem;
