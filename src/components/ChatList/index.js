import React from 'react';
import {connect} from 'cerebral-view-react';
import itemsListCountComputed from '~/computed/itemsListCountComputed';
import Items from './Items';
import styles from './styles';

export default connect({
  is_logged: 'login.is_logged',
  itemsCount: itemsListCountComputed(),
}, {
  redirectedToLogin: 'main.redirectedToLogin',
},
  class ChatList extends React.Component {

    static autosizeLoaded = false;

    componentDidMount() {
      if (!this.props.is_logged) {
        this.props.redirectedToLogin();
      }
      this.messagesNode.scrollTop = this.messagesNode.scrollHeight;
    }

    componentDidUpdate(prevProps) {
      // redirect to login if is_logged === false
      if (prevProps.is_logged !== this.props.is_logged) {
        if (!this.props.is_logged) {
          this.props.redirectedToLogin();
        }
      }

      if (this.props.itemsCount > prevProps.itemsCount) {
        window.requestAnimationFrame(() => {
          this.messagesNode.scrollTop = this.messagesNode.scrollHeight;
          if (this.messagesNode !== undefined) {
            this.messagesNode.scrollTop = this.messagesNode.scrollHeight;
          }
        });
      }
    }

    render() {
      return (
        <div
          style={styles.messages} id="messages"
          ref={node => {this.messagesNode = node;}}>
          <Items />
        </div>
      );
    }

  }
);
