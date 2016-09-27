import React from 'react';
import {connect} from 'cerebral-view-react';
import styles from './styles';

export default connect({
  is_admin: 'login.user.is_admin',
}, {
  addMemberClicked: 'members.addMemberClicked',
  removeUserClicked: 'members.removeUserClicked',
},
  class User extends React.Component {
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
              value="add as member"
              onClick={() => this.props.addMemberClicked({user_id: this.props.data.user_id})}
            />
            <input
              style={styles.button}
              type="button"
              value="delete user"
              onClick={() => this.props.removeUserClicked({user_id: this.props.data.user_id})}
            />
          </div>
        </div>
      );
    }

  }
);
