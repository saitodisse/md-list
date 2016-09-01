import Inferno from 'inferno';
import Component from 'inferno-component';
import {connect} from 'cerebral-view-inferno';
import styles from './styles';

export default connect({
  items: 'chat.items',
  user: 'login.user',
}, {
  pageLoaded: 'chat.pageLoaded',
  pageUnloaded: 'chat.pageUnloaded',
  currentUserRequested: 'login.currentUserRequested',
  deleteClicked: 'chat.deleteClicked',
  postClicked: 'chat.postClicked',
  putClicked: 'chat.putClicked',
},
  class ListApp extends Component {
    componentDidMount() {
      if (!this.props.user.uid) {
        this.props.currentUserRequested();
      }
      this.props.pageLoaded();
    }

    componentWillUnmount() {
      this.props.pageUnloaded();
    }

    componentDidMount() {
      if (!this.props.user.uid) {
        this.props.currentUserRequested();
      }
      this.props.pageLoaded();
    }

    render() {
      return (
        <div style={styles.container}>
          <div style={styles.buttonsContainer}>
            <button
              style={styles.button}
              onClick={this.props.deleteClicked}
            >
              DELETE
            </button>

            <button
              style={styles.button}
              onClick={this.props.postClicked}
            >
              POST
            </button>

            <button
              style={styles.button}
              onClick={this.props.putClicked}
            >
              PUT
            </button>
          </div>

          <div style={styles.dataContainer}>
            <pre>{JSON.stringify(this.props.items, null, 2)}</pre>
          </div>

        </div>
      );
    }

  }
);
