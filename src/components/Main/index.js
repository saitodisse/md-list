import Inferno from 'inferno';
import Component from 'inferno-component';
import {connect} from 'cerebral-view-inferno';

import Login from '~/components/Login';
import ListApp from '~/components/ListApp';

import {
  PAGE_EMPTY,
  PAGE_LOGIN,
  PAGE_LIST,
} from '~/constants';

import styles from './styles';

export default connect({
  currentPage: 'main.currentPage',
}, {
  redirectToLogin: 'main.redirectToLogin',
  redirectToList: 'main.redirectToList',
},
  class Main extends Component {
    render() {
      const pages = {};
      pages[PAGE_LOGIN] = <Login />;
      pages[PAGE_LIST] = <ListApp />;
      pages[PAGE_EMPTY] = null;
      return (
        <div style={styles.mainContainer}>
          <div style={styles.titleContainer}>
            <div style={styles.title}>
              MD list
            </div>
            <button
              style={styles.buttonGoLogin}
              onClick={this.props.redirectToLogin}
            >
              Login
            </button>
            <button
              style={styles.buttonGoLogin}
              onClick={this.props.redirectToList}
            >
              List
            </button>
          </div>
          <div style={styles.bodyContainer}>
            {pages[this.props.currentPage]}
          </div>
        </div>
      );
    }
  }
);
