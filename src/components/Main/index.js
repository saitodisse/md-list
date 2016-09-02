import Inferno from 'inferno';
import Component from 'inferno-component';
import {connect} from 'cerebral-view-inferno';

import Login from '~/components/Login';
import ListApp from '~/components/ListApp';
import Chat from '~/components/Chat';
import ChatList from '~/components/ChatList';

import {
  PAGE_EMPTY,
  PAGE_LOGIN,
  PAGE_LIST,
  PAGE_CHAT,
  PAGE_CHAT_LIST,
} from '~/constants';

function getPages() {
  const pages = {};
  pages[PAGE_LOGIN] = <Login />;
  pages[PAGE_LIST] = <ListApp />;
  pages[PAGE_CHAT] = <Chat />;
  pages[PAGE_CHAT_LIST] = <ChatList />;
  pages[PAGE_EMPTY] = null;
  return pages;
}

import styles from './styles';

export default connect({
  user: 'login.user',
  current_page: 'main.current_page',
}, {
  redirectToLogin: 'main.redirectToLogin',
  redirectToList: 'main.redirectToList',
  redirectToChat: 'main.redirectToChat',
  redirectToChatList: 'main.redirectToChatList',
  pageLoaded: 'main.pageLoaded',
  pageUnloaded: 'main.pageUnloaded',
  currentUserRequested: 'login.currentUserRequested',
},
  class Main extends Component {
    componentDidMount() {
      if (!this.props.user.uid) {
        this.props.currentUserRequested();
      }
      this.props.pageLoaded();
    }
    componentWillUnmount() {
      this.props.pageUnloaded();
    }

    render() {
      const pages = getPages();
      return (
        <div style={styles.mainContainer}>
          <div style={styles.titleContainer}>
            <div style={styles.title}>
              MD list
            </div>

            <div style={styles.buttonsContainer}>
              <button
                style={styles.button}
                onClick={this.props.redirectToLogin}
              >
                Facebook Login
              </button>

              <button
                style={styles.button}
                onClick={this.props.redirectToList}
              >
                List (JSON Server)
              </button>

              <button
                style={styles.button}
                onClick={this.props.redirectToChatList}
              >
                Chat List (firebase)
              </button>
            </div>

          </div>
          <div style={styles.bodyContainer}>
            {pages[this.props.current_page]}
          </div>
        </div>
      );
    }
  }
);
