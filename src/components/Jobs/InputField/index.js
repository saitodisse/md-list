import React from 'react';
import { connect } from 'cerebral-view-react';
import styles from './styles';

//noinspection JSUnusedLocalSymbols
export default connect({
    // is_admin: 'login.user.is_admin',
  }, {
    // toggleConfigurationClicked: 'configurations.toggleConfigurationClicked',
  },
  class SearchResultItem extends React.Component {
    //noinspection JSMethodCanBeStatic
    render() {
      return (
        <div style={styles.inputContainer} id="inputContainer">
          <label style={styles.label}>
            {this.props.label}:
          </label>
          <input
            id={this.props.id}
            type="text"
            style={styles.input}
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