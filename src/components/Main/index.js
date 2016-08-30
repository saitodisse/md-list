import Inferno from 'inferno';
import Component from 'inferno-component';
import {connect} from 'cerebral-view-inferno';

import Login from '~/components/Login';
import ListApp from '~/components/ListApp';
import Chat from '~/components/Chat';

import {
  PAGE_EMPTY,
  PAGE_LOGIN,
  PAGE_LIST,
  PAGE_CHAT,
} from '~/constants';

function getPages() {
  const pages = {};
  pages[PAGE_LOGIN] = <Login />;
  pages[PAGE_LIST] = <ListApp />;
  pages[PAGE_CHAT] = <Chat />;
  pages[PAGE_EMPTY] = null;
  return pages;
}

import styles from './styles';

export default connect({
  current_page: 'main.current_page',
}, {
  redirectToLogin: 'main.redirectToLogin',
  redirectToList: 'main.redirectToList',
  redirectToChat: 'main.redirectToChat',
},
  class Main extends Component {
    render() {
      const pages = getPages();
      return (
        <div style={styles.mainContainer}>
          <div style={styles.titleContainer}>
            <div style={styles.title}>
              MD list
            </div>
            <button
              style={styles.buttonGoLogin}
              onClick={this.props.redirectToLogin}
            >
              Login
            </button>
            <button
              style={styles.buttonGoLogin}
              onClick={this.props.redirectToList}
            >
              List
            </button>
            <button
              style={styles.buttonGoLogin}
              onClick={this.props.redirectToChat}
            >
              Chat
            </button>
          </div>
          <div style={styles.bodyContainer}>
            {pages[this.props.current_page]}
          </div>
        </div>
      );
    }
  }
);
