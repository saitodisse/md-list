import React from 'react';
import { connect } from 'cerebral-view-react';
import _ from 'lodash/fp';

export default connect({
    selected_id: 'jobs.json_extraction_fields.selected.id',
  }, {
    json_extraction_fields_rowClicked: 'jobs.json_extraction_fields_rowClicked',
  },
  class JsonExtractionsFieldsTable extends React.Component {
    _renderRow = (obj_list) => {
      return _.map((item) => (
        <tr
          key={item.id}
          onClick={() => this.props.json_extraction_fields_rowClicked({
            id: item.id
          })}
          className={this._getSelectedClass(item.id)}
        >
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.selector}</td>
          <td>{item.data_type}</td>
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
              <th>name</th>
              <th>selector</th>
              <th>data_type</th>
              <th>js_type</th>
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