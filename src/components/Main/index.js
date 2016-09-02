import Inferno from 'inferno';
import Component from 'inferno-component';
import {connect} from 'cerebral-view-inferno';

import Login from '~/components/Login';
import ChatList from '~/components/ChatList';

import {
  PAGE_EMPTY,
  PAGE_LOGIN,
  PAGE_CHAT_LIST,
} from '~/constants';

function getPages() {
  const pages = {};
  pages[PAGE_LOGIN] = <Login />;
  pages[PAGE_CHAT_LIST] = <ChatList />;
  pages[PAGE_EMPTY] = null;
  return pages;
}

import styles from './styles';

export default connect({
  user: 'login.user',
  is_logged: 'login.is_logged',
  current_page: 'main.current_page',
}, {
  pageLoaded: 'main.pageLoaded',

  userLoggedIn: 'main.userLoggedIn',
  redirectToChatList: 'main.redirectToChatList',

  userLoggedOut: 'main.userLoggedOut',
  redirectToLogin: 'main.redirectToLogin',

  signOutClicked: 'login.signOutClicked',
},
  class Main extends Component {
    componentDidMount() {
      this.props.pageLoaded();
    }
    componentWillUnmount() {
      this.props.userLoggedOut();
    }
    componentDidUpdate(prevProps) {
      if (prevProps.is_logged !== this.props.is_logged) {
        if (this.props.is_logged) {
          this.props.userLoggedIn();
          this.props.redirectToChatList();
        } else {
          this.props.userLoggedOut();
          this.props.redirectToLogin();
        }
      }
    }

    getTitle() {
      if (this.props.current_page === PAGE_LOGIN) {
        return ':: Login';
      }
      if (this.props.current_page === PAGE_CHAT_LIST) {
        return ':: Chat';
      }
      return '';
    }

    render() {
      const pages = getPages();
      return (
        <div style={styles.mainContainer}>
          <div style={styles.titleContainer}>
            <div style={styles.title}>
              md list {this.getTitle(this.props.current_page)}
            </div>

            <div style={styles.buttonsContainer}>
              {this.props.is_logged && this.props.user.displayName}

              <div
                style={styles.link}
                onClick={this.props.signOutClicked}
              >
                logout
              </div>
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
