import Inferno from 'inferno';
import Component from 'inferno-component';
import {connect} from 'cerebral-view-inferno';
import styles from './styles';

export default connect({
  is_logged: 'login.is_logged',
  is_loading: 'login.is_loading',
  error_code: 'login.error_code',
  error_message: 'login.error_message',
  user: 'login.user',
  some_data: 'login.some_data',
}, {
  facebookLoginClicked: 'login.facebookLoginClicked',
  signOutClicked: 'login.signOutClicked',
},
  class Login extends Component {
    componentDidUpdate(_prevProps) {
    }

    componentDidMount() {
    }

    render() {
      return (
        <div style={styles.container}>
          <button
            style={styles.facebookLoginButton}
            onClick={this.props.facebookLoginClicked}
          >
            Facebook Login
          </button>
          <button
            style={styles.signOutButton}
            onClick={this.props.signOutClicked}
          >
            Sign Out
          </button>

          <br />
          some_data: {this.props.some_data}

          <br />
          is_logged: {this.props.is_logged ? 'true' : 'false'}
          <br />
          is_loading: {this.props.is_loading ? 'true' : 'false'}
          <br />
          error_code: {this.props.error_code}
          <br />
          error_message: {this.props.error_message}
          <br />
          user:
            <pre>
              {JSON.stringify(this.props.user, null, 2)}
            </pre>
        </div>
      );
    }

  }
);
