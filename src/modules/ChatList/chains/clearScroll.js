import { set } from 'cerebral/operators';

const clearScroll = [
  set('state:chatList.scroll_requested', null),
];

export default clearScroll;
