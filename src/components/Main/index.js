import React from 'react';
import { connect } from 'cerebral-view-react';
import _ from 'lodash/fp';
import NotificationSystem from 'react-notification-system';
import Login from '../../components/Login';
import ChatList from '../../components/ChatList';
import ChatListFooter from '../../components/ChatList/ChatListFooter';
import Configuration from '../../components/Configuration';
import Members from '../../components/Members';
import Search from '../../components/Search';
import Jobs from '../../components/Jobs/index';
import Executions from '../../components/Executions/index';
import Body_Results from '../../components/Body_Results/index';
import JSON_Extrations from '../../components/JSON_Extrations/index';
import Markdown_Conversions from '../../components/Markdown_Conversions/index';
import {
  PAGE_EMPTY,
  PAGE_LOGIN,
  PAGE_CHAT_LIST,
  PAGE_CONFIGURATION,
  PAGE_MEMBERS,
  PAGE_SEARCH,
  PAGE_JOBS,
  PAGE_EXECUTIONS,
  PAGE_BODY_RESULTS,
  PAGE_JSON_EXTRATIONS,
  PAGE_MARKDOWN_CONVERSIONS
} from '../../constants';
import styles from './styles';

export function getPages() {
  const pages = {};
  pages[ PAGE_CHAT_LIST ] = {
    body: <ChatList />,
    footer: <ChatListFooter />,
  };
  pages[ PAGE_LOGIN ] = {
    body: <Login />,
    footer: null,
  };
  pages[ PAGE_CONFIGURATION ] = {
    body: <Configuration />,
    footer: null,
  };
  pages[ PAGE_MEMBERS ] = {
    body: <Members />,
    footer: null,
  };
  pages[ PAGE_SEARCH ] = {
    body: <Search />,
    footer: null,
  };
  pages[ PAGE_JOBS ] = {
    body: <Jobs />,
    footer: null,
  };
  pages[ PAGE_EXECUTIONS ] = {
    body: <Executions />,
    footer: null,
  };
  pages[ PAGE_BODY_RESULTS ] = {
    body: <Body_Results />,
    footer: null,
  };
  pages[ PAGE_JSON_EXTRATIONS ] = {
    body: <JSON_Extrations />,
    footer: null,
  };
  pages[ PAGE_MARKDOWN_CONVERSIONS ] = {
    body: <Markdown_Conversions />,
    footer: null,
  };

  pages[ PAGE_SEARCH ] = {
    body: <Search />,
    footer: null,
  };
  pages[ PAGE_SEARCH ] = {
    body: <Search />,
    footer: null,
  };
  pages[ PAGE_SEARCH ] = {
    body: <Search />,
    footer: null,
  };
  pages[ PAGE_SEARCH ] = {
    body: <Search />,
    footer: null,
  };
  pages[ PAGE_SEARCH ] = {
    body: <Search />,
    footer: null,
  };
  pages[ PAGE_EMPTY ] = {
    body: null,
    footer: null,
  };
  return pages;
}

export const redirections = {
  redirectedToLogin: 'main.redirectedToLogin',
  redirectedToChatList: 'main.redirectedToChatList',
  redirectedToConfiguration: 'main.redirectedToConfiguration',
  redirectedToMembers: 'main.redirectedToMembers',
  redirectedToSearch: 'main.redirectedToSearch',
  redirectedToJobs: 'main.redirectedToJobs',
  redirectedToExecutions: 'main.redirectedToExecutions',
  redirectedToBody_Results: 'main.redirectedToBody_Results',
  redirectedToJSON_Extrations: 'main.redirectedToJSON_Extrations',
  redirectedToMarkdown_Conversions: 'main.redirectedToMarkdown_Conversions',
};

export default connect({
    user: 'login.user',
    login_is_loading: 'login.is_loading',
    is_logged: 'login.is_logged',
    current_page: 'main.current_page',
    page_is_visible: 'main.page_is_visible',
    window_size_is_mobile: 'main.window_size_is_mobile',
    error_message: 'main.error',
    is_admin: 'login.user.is_admin',
    all_loaded: 'main.all_loaded',
    loading_status: 'main.loading_status',
    scroll_requested: 'chatList.scroll_requested',
    first_item_key: 'chatList.first_item_key',
  }, {
    pageLoaded: 'main.pageLoaded',

    userLoggedIn: 'main.userLoggedIn',

    userLoggedOut: 'main.userLoggedOut',
    userDisconnected: 'main.userDisconnected',
    ...redirections,

    signOutClicked: 'login.signOutClicked',

    pageBecameHidden: 'main.pageBecameHidden',
    pageBecameVisible: 'main.pageBecameVisible',
    windowSizeIsMobileEmited: 'main.windowSizeIsMobileEmited',
    windowSizeIsDesktopEmited: 'main.windowSizeIsDesktopEmited',

    elasticsearchHelthRequested: 'search.elasticsearchHelthRequested',
    scrollDone: 'chatList.scrollDone',
    getMoreItemsRequested: 'main.getMoreItemsRequested',
  },
  class Main extends React.Component {
    componentDidMount() {
      this.props.elasticsearchHelthRequested();
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

      if (prevProps.error_message !== this.props.error_message
        && this.props.error_message !== null) {
        this._notificationSystem && this._notificationSystem.addNotification({
          message: this.props.error_message,
          level: 'error'
        });
      }

      if (this.props.scroll_requested !== prevProps.scroll_requested
        && !_.isNil(this.props.scroll_requested)
        && this.sectionBody) {
        switch (this.props.scroll_requested) {
        case 'UP':
          window.requestAnimationFrame(() => {
            this.sectionBody.scrollTop = this.sectionBody.scrollTop - 30;
            this.props.scrollDone();
          });
          break;
        case 'PAGE_UP':
          window.requestAnimationFrame(() => {
            this.sectionBody.scrollTop = this.sectionBody.scrollTop - this.sectionBody.offsetHeight;
            this.props.scrollDone();
          });
          break;
        case 'DOWN':
          window.requestAnimationFrame(() => {
            this.sectionBody.scrollTop = this.sectionBody.scrollTop + 30;
            this.props.scrollDone();
          });
          break;
        case 'PAGE_DOWN':
          window.requestAnimationFrame(() => {
            this.sectionBody.scrollTop = this.sectionBody.scrollTop + this.sectionBody.offsetHeight;
            this.props.scrollDone();
          });
          break;
        case 'BOTTOM':
          window.requestAnimationFrame(() => {
            this.sectionBody.scrollTop = this.sectionBody.scrollHeight;
            this.props.scrollDone();
          });
          break;
        default:
          break;
        }
      }

      if (prevProps.scroll_requested !== this.props.scroll_requested
        && this.props.scroll_requested !== 'BOTTOM') {
        this._listenScroll();
      }

      if (prevProps.first_item_key !== this.props.first_item_key
        && prevProps.first_item_key !== null) {
        window.requestAnimationFrame(() => {
          const el = document.querySelector(`#${prevProps.first_item_key}`);
          if (el) {
            const itemBeforeOffsetTop = el.offsetTop;
            this.sectionBody.scrollTop = itemBeforeOffsetTop - 80;
          }
        });
      }
    }

    _listenScroll = () => {
      if (this.sectionBody.onscroll === null) {
        this.sectionBody.onscroll = () => {
          this._scrollChanged();
        };
      }
    };

    _scrollChanged = () => {
      if (this.sectionBody.scrollTop === 0
        && this.props.current_page === PAGE_CHAT_LIST) {
        this.props.getMoreItemsRequested();
      }
    };

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
        if (document[ hidden ]) {
          this.props.pageBecameHidden();
        } else {
          this.props.pageBecameVisible();
        }
      }

      // Warn if the browser doesn't support addEventListener or the Page Visibility API
      if (typeof document.addEventListener === 'undefined' || typeof document[ hidden ] === 'undefined') {
        console.warn('Page Visibility API: requires a compatible browser, such as Google Chrome or Firefox.');
      } else {
        // Handle page visibility change
        document.addEventListener(visibilityChange, handleVisibilityChange.bind(this), false);
        window.addEventListener('resize', this._resizeThrottler, false);
        window.onfocus = () => this.props.pageBecameVisible();
        window.onblur = () => this.props.pageBecameHidden();
      }
    }

    _resizeThrottler = () => {
      // ignore resize events as long as an actualResizeHandler execution is in the queue
      if (!this.resizeTimeout) {
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
    };

    _showLoading = () => {
      return (
        <ul style={styles.loadingStatus}>
          {_.map((item) => {
            if (item.logType === 'log') {
              return (
                <li key={item.id} style={styles.loadingStatusContainer}>
                  <div style={styles.loadingStatusLogType}>
                    {item.context}
                  </div>
                  <div style={styles.loadingStatusLogMessage}>
                    {item.message}
                  </div>
                </li>
              );
            } else if (item.logType === 'start') {
              this._startDate = item.created_at;
            } else if (item.logType === 'end') {
              return (
                <li key={item.id} style={styles.loadingStatusContainer}>
                  <div style={styles.loadingStatusLogType}>
                    {item.context}
                  </div>
                  <div style={styles.loadingStatusLogTime}>
                    {
                      item.created_at - this._startDate
                    }
                  </div>
                </li>
              );
            }
            return null;
          }, this.props.loading_status)}
        </ul>
      );
    };

    render() {
      if (!this.props.all_loaded) {
        return (
          <div style={styles.loadingContainer} id="loadingContainer">
            Loading...
            {this._showLoading()}
          </div>
        );
      }

      const pages = getPages();
      return (
        <div style={styles.mainContainer} id="mainContainer">
          <NotificationSystem ref="notificationSystem"/>

          <header style={styles.header}>
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

              <a
                style={styles.topLink}
                onClick={() => this.props.redirectedToSearch()}
              >
                search
              </a>

              {this.props.is_admin && (
                <div>
                  <a
                    style={styles.topLink}
                    onClick={() => this.props.redirectedToMembers()}
                  >
                    members
                  </a>

                  <a
                    style={styles.topLink}
                    onClick={() => this.props.redirectedToJobs()}
                  >
                    Jobs
                  </a>
                  <a
                    style={styles.topLink}
                    onClick={() => this.props.redirectedToExecutions()}
                  >
                    Executions
                  </a>
                  <a
                    style={styles.topLink}
                    onClick={() => this.props.redirectedToBody_Results()}
                  >
                    Body_Results
                  </a>
                  <a
                    style={styles.topLink}
                    onClick={() => this.props.redirectedToJSON_Extrations()}
                  >
                    JSON_Extrations
                  </a>
                  <a
                    style={styles.topLink}
                    onClick={() => this.props.redirectedToMarkdown_Conversions()}
                  >
                    Markdown_Conversions
                  </a>
                </div>
              )}

              {!this.props.window_size_is_mobile && (
                <div style={styles.reffsDiv}>
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
                </div>
              )}
            </div>
            <div style={styles.buttonsContainer} id="buttonsContainer">
              {this.props.is_logged && (
                <img style={styles.userPhoto} id="userPhoto" src={this.props.user.photoURL} alt="photo"/>
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
          </header>


          <section
            id="sectionBody"
            style={styles.bodySection}
            ref={node => {
              this.sectionBody = node;
            }}
          >
            {pages[ this.props.current_page ].body}
          </section>


          <footer style={styles.footer}>
            {pages[ this.props.current_page ].footer}
          </footer>

        </div>
      );
    }
  }
);
