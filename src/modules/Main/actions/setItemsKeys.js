function setItemsKeys({ input, state }) {
  if (!input.value) {
    return;
  }
  const item_keys = Object.keys(input.value);
  if (item_keys.length > 0) {
    state.set('chatList.first_item_key', item_keys[ 0 ]);
  }
  const items = item_keys.reduce((prev, key) => {
    prev[ key ] = input.value[ key ];
    prev[ key ].id = key;
    return prev;
  }, {});
  state.set('chatList.items', items);
}

export default setItemsKeys;
