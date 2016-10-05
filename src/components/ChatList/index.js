import React from 'react';
import { connect } from 'cerebral-view-react';
import Items from './Items';
import styles from './styles';
import itemsListCountComputed from '../../computed/itemsListCountComputed';

export default connect({
    items: 'chatList.items.*',
    is_logged: 'login.is_logged',
    itemsCount: itemsListCountComputed(),
    is_ready: 'chatList.is_ready',
    submiting_item: 'chatList.submiting_item',
    last_operation_was_update: 'chatList.last_operation_was_update',
  }, {
    redirectedToLogin: 'main.redirectedToLogin',
    scrollItemsRequested: 'chatList.scrollItemsRequested',
    pageReady: 'chatList.pageReady',
  },
  class ChatList extends React.Component {

    static autosizeLoaded = false;

    componentDidMount() {
      if (!this.props.is_logged) {
        this.props.redirectedToLogin();
      }
      window.requestAnimationFrame(() => {
        this.props.scrollItemsRequested({ direction: 'BOTTOM' });
        this.props.pageReady();
      });
    }

    componentDidUpdate(prevProps) {
      // redirect to login if is_logged === false
      if (prevProps.is_logged !== this.props.is_logged) {
        if (!this.props.is_logged) {
          this.props.redirectedToLogin();
        }
      }

      if (this.props.submiting_item !== prevProps.submiting_item
        && this.props.submiting_item === false
        && !this.props.last_operation_was_update) {
        this.props.scrollItemsRequested({ direction: 'BOTTOM' });
      }
    }

    render() {
      return (
        <div style={styles.messages} id="messages">
          {/* LOADING ITEMS (wait scroll 1s) */}
          {!this.props.is_ready && (
            <div style={styles.pleaseWait}>
              <div className="loader"/>
              <div>Please wait..</div>
            </div>
          )}

          {/* ITEMS */}
          <Items items={this.props.items}/>
        </div>
      );
    }

  }
);
