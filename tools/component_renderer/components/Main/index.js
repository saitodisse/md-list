import React from 'react';
import { connect } from 'cerebral-view-react';
import NotificationSystem from 'react-notification-system';
import Login from '../../../../src/components/Login';
import ChatList from '../../../../src/components/ChatList';
import ChatListFooter from '../../../../src/components/ChatList/ChatListFooter';
import Configuration from '../../../../src/components/Configuration';
import Members from '../../../../src/components/Members';
import Search from '../../../../src/components/Search';
import Jobs from '../../../../src/components/Jobs/index';
import Executions from '../../../../src/components/Executions/index';
import Body_Results from '../../../../src/components/Body_Results/index';
import JSON_Extrations from '../../../../src/components/JSON_Extrations/index';
import Markdown_Conversions from '../../../../src/components/Markdown_Conversions/index';
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
} from '../../../../src/constants';
import styles from './styles';

function getPages() {
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

export default connect({
    current_page: 'main.current_page',
  }, {
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
  },
  class Main extends React.Component {
    render() {
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
