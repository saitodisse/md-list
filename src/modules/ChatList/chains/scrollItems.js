import { copy } from 'cerebral/operators';

const scrollItems = [
  copy('input:direction', 'state:chatList.scroll_requested'),
];

export default scrollItems;
