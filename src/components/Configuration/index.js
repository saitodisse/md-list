import React from 'react';
import {connect} from 'cerebral-view-react';
import styles from './styles';

export default connect({
  data: 'configuration.data',
}, {
  pageLoaded: 'configuration.pageLoaded',
},
  class Configuration extends React.Component {
    componentDidMount() {
      this.props.pageLoaded();
    }
    render() {
      return (
        <div style={styles.container} id="container">
          Configurations:
          <pre>
            {JSON.stringify(this.props.data, null, 2)}
          </pre>
        </div>
      );
    }

  }
);
