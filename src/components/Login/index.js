import Inferno from 'inferno';
import Component from 'inferno-component';
import {connect} from 'cerebral-view-inferno';
import styles from './styles';

export default connect({
  isLogged: 'login.isLogged',
  isLogging: 'login.isLogging',
  error: 'login.error',
}, {
  loginClicked: 'login.loginClicked',
},
  class Login extends Component {
    componentDidUpdate(_prevProps) {
    }

    componentDidMount() {
    }

    render() {
      return (
        <div style={styles.container}>
          isLogged: {this.props.isLogged}
          <br />
          isLogging: {this.props.isLogging}
          <br />
          error: {this.props.error}
          <br />
          Login
          <br />
        </div>
      );
    }

  }
);
