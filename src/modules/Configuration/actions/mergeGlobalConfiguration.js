function mergeItem({ state, input }) {
  state.set(`configurations.${input.key}`, input.value);
}

export default mergeItem;
