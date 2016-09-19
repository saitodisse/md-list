function setItemsKeys({ input, state }) {
  if (!input.value) {
    return;
  }

  const items = Object.keys(input.value).reduce((prev, key) => {
    prev[key] = input.value[key];
    prev[key].id = key;
    return prev;
  }, {});
  state.set('chatList.items', items);
}

export default setItemsKeys;
