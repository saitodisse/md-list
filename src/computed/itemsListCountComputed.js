import {Computed} from 'cerebral';

export default Computed({
  itemsList: 'listApp.items'
}, props => {
  return Object.keys(props.itemsList).length;
});
