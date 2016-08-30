import Inferno from 'inferno';
import Component from 'inferno-component';
import {connect} from 'cerebral-view-inferno';
import styles from './styles';

export default connect({
  some_data: 'chat.some_data',
}, {
  pageLoaded: 'chat.pageLoaded',
},
  class ListApp extends Component {
    componentDidMount() {
      this.props.pageLoaded();
    }

    render() {
      return (
        <div style={styles.container}>
          some_data: {this.props.some_data}
        </div>
      );
    }

  }
);
