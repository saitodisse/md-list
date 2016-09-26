import React from 'react';
import {connect} from 'cerebral-view-react';

import Login from '~/components/Login';
import ChatList from '~/components/ChatList';
import Configuration from '~/components/Configuration';
import screenfull from 'screenfull';
import NotificationSystem from 'react-notification-system';

import {
  PAGE_EMPTY,
  PAGE_LOGIN,
  PAGE_CHAT_LIST,
  PAGE_CONFIGURATION,
} from '~/constants';

function getPages() {
  const pages = {};
  pages[PAGE_LOGIN] = <Login />;
  pages[PAGE_CHAT_LIST] = <ChatList />;
  pages[PAGE_CONFIGURATION] = <Configuration />;
  pages[PAGE_EMPTY] = null;
  return pages;
}

import styles from './styles';

export default connect({
  user: 'login.user',
  login_is_loading: 'login.is_loading',
  is_logged: 'login.is_logged',
  current_page: 'main.current_page',
  page_is_visible: 'main.page_is_visible',
  window_size_is_mobile: 'main.window_size_is_mobile',
  error_message: 'main.error',
}, {
  pageLoaded: 'main.pageLoaded',

  userLoggedIn: 'main.userLoggedIn',

  userLoggedOut: 'main.userLoggedOut',
  userDisconnected: 'main.userDisconnected',
  redirectedToLogin: 'main.redirectedToLogin',
  redirectedToChatList: 'main.redirectedToChatList',
  redirectedToConfiguration: 'main.redirectedToConfiguration',

  signOutClicked: 'login.signOutClicked',

  pageBecameHidden: 'main.pageBecameHidden',
  pageBecameVisible: 'main.pageBecameVisible',
  windowSizeIsMobileEmited: 'main.windowSizeIsMobileEmited',
  windowSizeIsDesktopEmited: 'main.windowSizeIsDesktopEmited',

},
  class Main extends React.Component {
    componentDidMount() {
      this.props.pageLoaded();
      this.listenPageVisibilityChanges();
      this._resizeThrottler();
      this._notificationSystem = this.refs.notificationSystem;
    }
    componentWillUnmount() {
      this.props.userLoggedOut();
    }
    componentDidUpdate(prevProps) {
      if (prevProps.login_is_loading !== this.props.login_is_loading) {
        if (!this.props.login_is_loading) {
          this.props.userLoggedIn();

          // after login redirect
          // go to chat list automatically
          if (this.props.current_page === PAGE_LOGIN) {
            this.props.redirectedToChatList();
          }
        } else {
          // user is not logged in
          this.props.redirectedToLogin();
        }
      }
      if (   prevProps.error_message !== this.props.error_message
          && this.props.error_message !== null) {
        this._notificationSystem.addNotification({
          message: this.props.error_message,
          level: 'error'
        });
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
        window.addEventListener('resize', this._resizeThrottler, false);
        window.onfocus = () => this.props.pageBecameVisible();
        window.onblur = () => this.props.pageBecameHidden();
      }
    }

    static resizeTimeout;
    _resizeThrottler = () => {
      // ignore resize events as long as an actualResizeHandler execution is in the queue
      if ( !this.resizeTimeout ) {
        this.resizeTimeout = setTimeout(() => {
          this.resizeTimeout = null;
          if (window.innerWidth < 700
              && (   this.props.window_size_is_mobile === null
                  || this.props.window_size_is_mobile === false)) {
            this.props.windowSizeIsMobileEmited();
          } else if (window.innerWidth >= 700
                     && (   this.props.window_size_is_mobile === null
                     || this.props.window_size_is_mobile === true)) {
            this.props.windowSizeIsDesktopEmited();
          }
        }, 300);
      }
    }

    _goFullScreen = () => {
      if (screenfull.enabled) {
        screenfull.toggle();
      }
    }

    render() {
      const pages = getPages();
      return (
        <div style={styles.mainContainer} id="mainContainer">

          <NotificationSystem ref="notificationSystem" />

          <div style={styles.titleContainer} id="titleContainer">
            <a
              target="_blank"
              style={styles.titleLink}
              onClick={() => this.props.redirectedToChatList()}
            >
              md list {this.props.page_is_visible}
            </a>
            <a
              style={styles.topLink}
              onClick={() => this.props.redirectedToConfiguration()}
            >
              config
            </a>
            <span style={styles.topSeparator}>
              |
            </span>
            <a
              style={styles.topLink}
              target="_blank"
              href="https://github.com/saitodisse/md-list"
            >
              github
            </a>
            <a
              style={styles.topLink}
              target="_blank"
              href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet"
            >
              md
            </a>
            <a
              style={styles.topLink}
              target="_blank"
              href="http://plantuml.com/"
            >
              puml
            </a>
            {this.props.window_size_is_mobile && (
              <a
                style={styles.topLink}
                target="_blank"
                onClick={this._goFullScreen}
              >
                full screen
              </a>
            )}
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

          <div style={styles.bodyContainer} id="bodyContainer">
            {pages[this.props.current_page]}
          </div>

        </div>
      );
    }
  }
);
