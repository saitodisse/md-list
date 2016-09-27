import React from 'react';
import {connect} from 'cerebral-view-react';
import styles from './styles';

export default connect({
  is_admin: 'login.user.is_admin',
}, {
  makeAdminClicked: 'members.makeAdminClicked',
  removeMemberClicked: 'members.removeMemberClicked',
},
  class Member extends React.Component {
    render() {
      return (
        <div className="fieldContainer">
          <div className="labelContainer">
            <div style={styles.photo} className="label">
              <img style={styles.userPhoto} id="userPhoto" src={this.props.data.photoURL} alt="photo" />
            </div>
            <div style={styles.label} className="label">
              {this.props.data.displayName}
            </div>
            <div style={styles.labelDescription} className="label">
              {this.props.data.user_id}
            </div>
          </div>
          <div style={styles.value} className="value">
            <input
              style={styles.button}
              type="button"
              value="make admin"
              onClick={() => this.props.makeAdminClicked({user_id: this.props.data.user_id})}
            />
            <input
              style={styles.button}
              type="button"
              value="remove member"
              onClick={() => this.props.removeMemberClicked({user_id: this.props.data.user_id})}
            />
          </div>
        </div>
      );
    }

  }
);
