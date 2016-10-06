import React from 'react';
import { connect } from 'cerebral-view-react';
import styles from './styles';

export default connect({
    is_loading: 'login.is_loading',
  }, {
    facebookLoginClicked: 'login.facebookLoginClicked',
  },
  class Login extends React.Component {
    render() {
      return (
        <div style={styles.container} id="container">
          {!this.props.is_loading && (
            <button
              style={styles.facebookLoginButton} id="facebookLoginButton"
              onClick={this.props.facebookLoginClicked}
            >
              Sign In with facebook
            </button>
          )}
        </div>
      );
    }

  }
);
