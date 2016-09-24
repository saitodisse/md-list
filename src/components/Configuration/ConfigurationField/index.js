import React from 'react';
import {connect} from 'cerebral-view-react';
import styles from './styles';
import R from 'ramda';

export default connect({
  is_admin: 'login.user.is_admin',
}, {
  toggleConfigurationClicked: 'configurations.toggleConfigurationClicked',
},
  class ConfigurationField extends React.Component {
    render() {
      // set background if not admin
      const adminFieldContainer = !this.props.is_admin && this.props.only_admin ?
        R.merge(styles.fieldContainer, {
          backgroundColor: 'antiquewhite',
        }) :
        styles.fieldContainer;

      return (
        <div style={adminFieldContainer} className="fieldContainer">
          <div className="labelContainer">
            <div style={styles.label} className="label">
              {this.props.title}
            </div>
            <div style={styles.labelDescription} className="label">
              {this.props.description}
            </div>
          </div>
          <div style={styles.value} className="value">
            {typeof this.props.value === 'boolean' ? (
              <input
                type="checkbox"
                checked={this.props.value}
                onChange={(ev) => this.props.toggleConfigurationClicked({
                  path: this.props.path,
                  value: ev.target.checked
                })}
              />
            ) : (
              <input
                type="text"
                value={this.props.value}
                onChange={(ev) => this.props.toggleConfigurationClicked({
                  path: this.props.path,
                  value: ev.target.value
                })}
              />
            )}
          </div>
        </div>

      );
    }

  }
);
