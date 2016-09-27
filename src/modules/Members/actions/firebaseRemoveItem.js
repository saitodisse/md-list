function firebaseRemoveItem(path) {
  return function removeItem({ input, state }) {
    state.unset(`${path}.${input.key || input.id}`);
  };
}

export default firebaseRemoveItem;
