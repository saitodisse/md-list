import {Computed} from 'cerebral';

export default Computed({
  itemsList: 'chatList.items'
}, props => {
  return Object.keys(props.itemsList).length;
});
