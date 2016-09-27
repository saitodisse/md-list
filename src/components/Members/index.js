import React from 'react';
import {connect} from 'cerebral-view-react';
import styles from './styles';
import Admin from './Admin';
import Member from './Member';
import User from './User';

export default connect({
  members: 'members.*',
  user_id: 'login.user.uid',
  is_admin: 'login.user.is_admin',
}, {
  membersLoaded: 'members.pageLoaded',
  unlistened: 'members.unlistened',
},
  class Members extends React.Component {
    componentDidMount() {
      this.props.membersLoaded();
    }

    componentWillUnmount() {
      if (this.props.members.is_listening_firebase) {
        this.props.unlistened();
      }
    }

    render() {
      return (
        <div style={styles.container} className="container">

          <section className="title">
            Members
          </section>

          <section className="fields">

            {this.props.members.adminsList && (
              <div className="fieldGroup">
                <div className="fieldGroupTitle">
                  Admins
                </div>
                {Object.keys(this.props.members.adminsList).map((key) => <Admin data={this.props.members.usersList[key]} key={key} />)}
              </div>
            )}

            {this.props.members.membersList && (
              <div className="fieldGroup">
                <div className="fieldGroupTitle">
                  Members
                </div>
                {Object.keys(this.props.members.membersList).map((key) => <Member data={this.props.members.usersList[key]} key={key} />)}
              </div>
            )}

            {this.props.members.usersList && (
              <div className="fieldGroup">
                <div className="fieldGroupTitle">
                  Users
                </div>
                {Object.keys(this.props.members.usersList).map((key) => <User data={this.props.members.usersList[key]} key={key} />)}
              </div>
            )}

          </section>

        </div>
      );
    }

  }
);
