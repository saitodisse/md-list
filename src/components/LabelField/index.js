import React from 'react';
import { connect } from 'cerebral-view-react';
require('!style!css!./styles.css');

export default connect({
    // is_admin: 'login.user.is_admin',
  }, {
    // toggleConfigurationClicked: 'configurations.toggleConfigurationClicked',
  },
  class InputField extends React.Component {
    render() {
      return (
        <div id="labelField">
          <label className="field_label">
            {this.props.label}:
          </label>
          <label className="field_value">
            {this.props.value}
          </label>
        </div>
      );
    }

  }
);