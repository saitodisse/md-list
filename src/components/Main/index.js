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
  page_is_visible: 'main.page_is_visible',
}, {
  pageLoaded: 'main.pageLoaded',

  userLoggedIn: 'main.userLoggedIn',
  redirectToChatList: 'main.redirectToChatList',

  userLoggedOut: 'main.userLoggedOut',
  redirectToLogin: 'main.redirectToLogin',

  signOutClicked: 'login.signOutClicked',

  pageBecameHidden: 'main.pageBecameHidden',
  pageBecameVisible: 'main.pageBecameVisible',
},
  class Main extends Component {
    componentDidMount() {
      this.props.pageLoaded();
      this.listenPageVisibilityChanges();
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
          this.props.redirectToLogin();
        }
      }
    }

    listenPageVisibilityChanges() {
      // Set the name of the hidden property and the change event for visibility
      let hidden;
      let visibilityChange;
      if (typeof document.hidden !== 'undefined') { // Opera 12.10 and Firefox 18 and later support
        hidden = 'hidden';
        visibilityChange = 'visibilitychange';
      } else if (typeof document.mozHidden !== 'undefined') {
        hidden = 'mozHidden';
        visibilityChange = 'mozvisibilitychange';
      } else if (typeof document.msHidden !== 'undefined') {
        hidden = 'msHidden';
        visibilityChange = 'msvisibilitychange';
      } else if (typeof document.webkitHidden !== 'undefined') {
        hidden = 'webkitHidden';
        visibilityChange = 'webkitvisibilitychange';
      }

      function handleVisibilityChange() {
        if (document[hidden]) {
          this.props.pageBecameHidden();
        } else {
          this.props.pageBecameVisible();
        }
      }

      // Warn if the browser doesn't support addEventListener or the Page Visibility API
      if (typeof document.addEventListener === 'undefined' || typeof document[hidden] === 'undefined') {
        console.warn('Page Visibility API: requires a compatible browser, such as Google Chrome or Firefox.');
      } else {
        // Handle page visibility change
        document.addEventListener(visibilityChange, handleVisibilityChange.bind(this), false);
        window.onfocus = () => this.props.pageBecameVisible();
        window.onblur = () => this.props.pageBecameHidden();
      }
    }

    render() {
      const pages = getPages();
      return (
        <div style={styles.mainContainer} id="mainContainer">
          <div style={styles.titleContainer} id="titleContainer">
            <div style={styles.title} id="title">
              md list {this.props.page_is_visible}
            </div>

            <div style={styles.buttonsContainer} id="buttonsContainer">
              {this.props.is_logged && (
                <img style={styles.userPhoto} id="userPhoto" src={this.props.user.photoURL} alt="photo" />
              )}

              {this.props.is_logged && (
                <div
                  style={styles.link} id="link"
                  onClick={this.props.signOutClicked}
                >
                  logout
                </div>
              )}
            </div>

          </div>
          <div style={styles.bodyContainer} id="bodyContainer">
            {pages[this.props.current_page]}
          </div>
        </div>
      );
    }
  }
);