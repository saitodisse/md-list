import React from 'react';
import {connect} from 'cerebral-view-react';
import Items from './Items';
import styles from './styles';

export default connect({
  is_logged: 'login.is_logged',
}, {
  redirectedToLogin: 'main.redirectedToLogin',
},
  class ChatList extends React.Component {

    static autosizeLoaded = false;

    componentDidMount() {
      if (!this.props.is_logged) {
        this.props.redirectedToLogin();
      }
    }

    componentDidUpdate(prevProps) {
      // redirect to login if is_logged === false
      if (prevProps.is_logged !== this.props.is_logged) {
        if (!this.props.is_logged) {
          this.props.redirectedToLogin();
        }
      }
    }

    render() {
      return (
        <div style={styles.messages} id="messages">
          <Items />
        </div>
      );
    }

  }
);
