import {copy} from 'cerebral/operators';
import setCurrentItem from '../actions/setCurrentItem';

export default [
  setCurrentItem,
  copy('state:listApp.currentItem.title', 'state:listApp.newItemTitle'),
];
