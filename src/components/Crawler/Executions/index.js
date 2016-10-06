import React from 'react';
import { connect } from 'cerebral-view-react';
import styles from './styles';

//noinspection JSUnusedLocalSymbols
export default connect({}, {},
  class Executions extends React.Component {
    //noinspection JSMethodCanBeStatic
    render() {
      return (
        <div style={styles.container} className="container">
          Executions
        </div>
      );
    }

  }
);