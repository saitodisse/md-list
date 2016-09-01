import R from 'ramda';

function removeItem({state}) {
  const items = state.get('chat.items');
  const keys = R.keys(items);
  state.unset(`chat.items.${keys[0]}`);
}

export default removeItem;
