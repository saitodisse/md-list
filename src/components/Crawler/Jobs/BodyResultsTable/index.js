import React from 'react';
import { connect } from 'cerebral-view-react';
import _ from 'lodash/fp';

export default connect({
    selected_body_result_id: 'jobs.body_result_id',
  }, {
    body_results_rowClicked: 'jobs.body_results_rowClicked',
  },
  class BodyResultsTable extends React.Component {
    _renderRow = (obj_list) => {
      return _.map((body_result) => (
        <tr
          key={body_result.body_result_id}
          onClick={() => this.props.body_results_rowClicked({ body_result_id: body_result.body_result_id })}
          className={this._getSelectedClass(body_result.body_result_id)}
        >
          <td>{body_result.body}</td>
          <td>{body_result.created_at}</td>
        </tr>
      ), obj_list);
    };

    render() {
      return (
        <section className="tableListContainer">
          <table className="tableList tableListClicable">
            <thead>
            <tr>
              <th>body</th>
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

    _getSelectedClass(body_result_id) {
      if (this.props.selected_body_result_id === body_result_id) {
        return 'selectedItem';
      } else {
        return null;
      }
    }
  }
);