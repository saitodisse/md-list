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
        <div id="inputField">
          <label className="label">
            {this.props.label}:
          </label>
          <input
            id={this.props.id}
            type="text"
            className="input"
            ref={node => {
              this.inputNode = node;
            }}
            value={this.props.value}
            onChange={this.props.onChange}
            onKeyDown={this.props.onKeyDown}
          />
        </div>
      );
    }

  }
);