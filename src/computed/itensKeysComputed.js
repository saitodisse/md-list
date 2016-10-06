import { Computed } from 'cerebral';

export default Computed({
  items: 'chatList.items'
}, props => {
  return Object.keys(props.items);
});
