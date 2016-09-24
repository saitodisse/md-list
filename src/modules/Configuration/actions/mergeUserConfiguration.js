function mergeItem({state, input}) {
  state.set(`login.user.configurations.${input.key}`, input.value);
}

export default mergeItem;
