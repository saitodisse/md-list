import React from 'react';
import {connect} from 'cerebral-view-react';
import itemsListCountComputed from '~/computed/itemsListCountComputed';
import Items from './Items';
import styles from './styles';

export default connect({
  is_logged: 'login.is_logged',
  itemsCount: itemsListCountComputed(),
  is_mount: 'chatList.is_mount',
  is_ready: 'chatList.is_ready',
}, {
  redirectedToLogin: 'main.redirectedToLogin',
  scrollItemsRequested: 'chatList.scrollItemsRequested',
  pageMonted: 'chatList.pageMonted',
  pageReady: 'chatList.pageReady',
},
  class ChatList extends React.Component {

    static autosizeLoaded = false;

    componentDidMount() {
      if (!this.props.is_logged) {
        this.props.redirectedToLogin();
      }
      this.props.pageMonted();
      setTimeout(() => {
        this.props.scrollItemsRequested({direction: 'BOTTOM'});
        this.props.pageReady();
      }, 1000);
    }

    componentDidUpdate(prevProps) {
      // redirect to login if is_logged === false
      if (prevProps.is_logged !== this.props.is_logged) {
        if (!this.props.is_logged) {
          this.props.redirectedToLogin();
        }
      }

      if (this.props.itemsCount > prevProps.itemsCount) {
        this.props.scrollItemsRequested({direction: 'BOTTOM'});
      }
    }

    render() {
      return (
        <div style={styles.messages} id="messages">
          {!this.props.is_ready && (
            <div style={styles.pleaseWait}>
              Loading itens. Please wait..
            </div>
          )}
          <Items />
        </div>
      );
    }

  }
);
