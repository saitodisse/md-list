import {copy} from 'cerebral/operators';
import toggleCurrentItem from '../actions/toggleCurrentItem';

export default [
  toggleCurrentItem,
  copy('state:listApp.currentItem.title', 'state:listApp.newItemTitle'),
];
