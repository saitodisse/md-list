function removeItem({ input, state }) {
  state.unset(`chatList.items.${input.id}`);
}

export default removeItem;
