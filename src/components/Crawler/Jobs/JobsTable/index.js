import React from 'react';
import { connect } from 'cerebral-view-react';
import _ from 'lodash/fp';

export default connect({
    selected_job_id: 'jobs.job_id',
  }, {
    rowClicked: 'jobs.rowClicked',
  },
  class JobsTable extends React.Component {
    _renderRow = (obj_list) => {
      return _.map((job) => (
        <tr
          key={job.job_id}
          onClick={() => this.props.rowClicked({ job_id: job.job_id })}
          className={this._getSelectedClass(job.job_id)}
        >
          <td>{job.job_name}</td>
          <td>{job.initial_spec_state}</td>
          <td>{job.url}</td>
          <td>{job.created_at}</td>
        </tr>
      ), obj_list);
    };

    render() {
      return (
        <section className="tableListContainer">
          <table className="tableList tableListClicable">
            <thead>
            <tr>
              <th>name</th>
              <th>initial_state</th>
              <th>url</th>
              <th>created_at</th>
            </tr>
            </thead>
            <tbody>
            {this._renderRow(this.props.obj_list)}
            </tbody>
          </table>
        </section>
      );
    }

    _getSelectedClass(job_id) {
      if (this.props.selected_job_id === job_id) {
        return 'selectedItem';
      } else {
        return null;
      }
    }
  }
);