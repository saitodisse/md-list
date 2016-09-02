import Inferno from 'inferno';
import Component from 'inferno-component';
import {connect} from 'cerebral-view-inferno';
import styles from './styles';

export default connect({
}, {
  facebookLoginClicked: 'login.facebookLoginClicked',
},
  class Login extends Component {
    render() {
      return (
        <div style={styles.container}>
          <button
            style={styles.facebookLoginButton}
            onClick={this.props.facebookLoginClicked}
          >
            Facebook Login
          </button>
        </div>
      );
    }

  }
);
