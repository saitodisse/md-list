import React from 'react';
import {connect} from 'cerebral-view-react';
import styles from './styles';
import Admin from './Admin';
import Member from './Member';
import User from './User';
import _ from 'lodash/fp';

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

    listAdmins = () => {
      const keys = Object.keys(this.props.members.adminsList);
      return _.map((key) => ({
        key,
        item: this.props.members.usersList[key]
      }), keys);
    }

    listMembers = () => {
      const keys = Object.keys(this.props.members.membersList);
      return _.map((key) => ({
        key,
        item: this.props.members.usersList[key]
      }), keys);
    }

    listUsers = () => {
      const keys = Object.keys(this.props.members.usersList);
      return _.map((key) => ({
        key,
        item: this.props.members.usersList[key]
      }), keys);
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
                {_.map(({key, item}) => (
                  <Admin data={item} key={key} />
                ), this.listAdmins())}
              </div>
            )}

            {this.props.members.membersList && (
              <div className="fieldGroup">
                <div className="fieldGroupTitle">
                  Members
                </div>
                {_.map(({key, item}) => (
                  <Member data={item} key={key} />
                ), this.listMembers())}
              </div>
            )}

            {this.props.members.usersList && (
              <div className="fieldGroup">
                <div className="fieldGroupTitle">
                  Users
                </div>
                {_.map(({key, item}) => (
                  <User data={item} key={key} />
                ), this.listUsers())}
              </div>
            )}

          </section>

        </div>
      );
    }

  }
);
