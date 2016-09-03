import Inferno from 'inferno';
import Component from 'inferno-component';
import {connect} from 'cerebral-view-inferno';
import styles from './styles';

export default connect({
  is_loading: 'login.is_loading',
}, {
  facebookLoginClicked: 'login.facebookLoginClicked',
},
  class Login extends Component {
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
