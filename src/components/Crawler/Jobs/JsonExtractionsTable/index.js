import React from 'react';
import { connect } from 'cerebral-view-react';
import _ from 'lodash/fp';

export default connect({
    selected_id: 'jobs.json_extraction_id',
  }, {
    json_extractions_rowClicked: 'jobs.json_extractions_rowClicked',
  },
  class JsonExtractionsTable extends React.Component {
    _renderRow = (obj_list) => {
      return _.map((item) => (
        <tr
          key={item.json_extraction_id}
          onClick={() => this.props.json_extractions_rowClicked({ json_extraction_id: item.json_extraction_id })}
          className={this._getSelectedClass(item.id)}
        >
          <td>{item.json_extraction_id}</td>
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
              <th>id</th>
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