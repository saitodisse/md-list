import R from 'ramda';

function removeItem({ input, state }) {
  state.unset(`chat.items.${input.key}`);
}

export default removeItem;
