import {set} from 'cerebral/operators';
import {PAGE_CHAT_LIST} from '~/constants';

const showChatList = [
  set('state:main.current_page', PAGE_CHAT_LIST),
];

export default showChatList;
