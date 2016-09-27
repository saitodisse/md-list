function firebaseMergeItem(path) {
  return function mergeItem({state, output, input}) {
    const {key, value} = input;
    const newItem = {};
    newItem[key] = value;

    state.merge(path, newItem);
    output({key});
  };
}

export default firebaseMergeItem;
