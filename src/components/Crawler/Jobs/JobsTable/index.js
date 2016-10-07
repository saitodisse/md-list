import React from 'react';
import { connect } from 'cerebral-view-react';
import _ from 'lodash/fp';

export default connect({
    selected_id: 'jobs.job.selected.id',
  }, {
    rowClicked: 'jobs.rowClicked',
  },
  class JobsTable extends React.Component {
    _renderRow = (obj_list) => {
      return _.map((item) => (
        <tr
          key={item.id}
          onClick={() => this.props.rowClicked({ id: item.id })}
          className={this._getSelectedClass(item.id)}
        >
          <td>{item.job_name}</td>
          <td>{item.initial_spec_state}</td>
          <td>{item.url}</td>
          <td>{item.created_at}</td>
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

    _getSelectedClass(id) {
      if (this.props.selected_id === id) {
        return 'selectedItem';
      } else {
        return null;
      }
    }
  }
);