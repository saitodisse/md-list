import React from 'react';
import { connect } from 'cerebral-view-react';
import styles from './styles';
import InputField from './InputField/index';

//noinspection JSUnusedLocalSymbols
export default connect({
    job_name: 'jobs.job_name',
  }, {
    inputJobNameChanged: 'jobs.inputJobNameChanged',
  },
  class Jobs extends React.Component {
    //noinspection JSMethodCanBeStatic
    render() {
      return (
        <div style={styles.container} className="container">
          <section className="title">
            Jobs
          </section>

          <InputField
            label="Job name"
            value={this.props.job_name}
            onChange={event => this.props.inputJobNameChanged({ query: event.target.value })}
          />

          <div style={styles.resultsContainer} id="resultsContainer">
            {/*<Items items={this.props.results} hideButtons={true}/>*/}
          </div>
        </div>
      );
    }
  }
);