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
    constructor(props) {
      super(props);

      this.state = {
        is_calculated: false
      };
    }

    componentDidMount() {
      this.props.membersLoaded();
    }

    componentWillUnmount() {
      if (this.props.members.is_listening_firebase) {
        this.props.unlistened();
      }
    }

    componentDidUpdate(prevProps) {
      if (!this.state.is_calculated && !_.isEmpty(this.props.members.adminsList)) {
        this.calculateLists();
      } else if (!_.isEqual(this.props.members.adminsList, prevProps.members.adminsList)) {
        this.calculateLists();
      } else if (!_.isEqual(this.props.members.membersList, prevProps.members.membersList)) {
        this.calculateLists();
      } else if (!_.isEqual(this.props.members.usersList, prevProps.members.usersList)) {
        this.calculateLists();
      }
    }

    calculateLists = () => {
      this.admins_keys = Object.keys(this.props.members.adminsList);

      const members_keys = Object.keys(this.props.members.membersList);
      this.members_keys = _.difference(members_keys, this.admins_keys);

      const users_keys = Object.keys(this.props.members.usersList);
      const members_and_admins = _.union(members_keys, this.admins_keys);
      const users_filtered = _.difference(users_keys, members_and_admins);
      this.users_keys = users_filtered;

      this.setState({is_calculated: true});
    }

    listAdmins = () => {
      return _.map((key) => ({
        key,
        item: this.props.members.usersList[key]
      }), this.admins_keys);
    }

    listMembers = () => {
      return _.map((key) => ({
        key,
        item: this.props.members.usersList[key]
      }), this.members_keys);
    }

    listUsers = () => {
      return _.map((key) => ({
        key,
        item: this.props.members.usersList[key]
      }), this.users_keys);
    }

    render() {
      return (
        <div style={styles.container} className="container">

          <section className="title">
            Members
          </section>

          <section className="fields">

            {!_.isEmpty(this.admins_keys) && (
              <div className="fieldGroup">
                <div style={styles.sectionTitle}>
                  Admins
                </div>
                <div style={styles.sectionSubTitle}>
                  Manage Users and Global Configurations
                </div>
                {_.map(({key, item}) => (
                  <Admin data={item} key={key} />
                ), this.listAdmins())}
              </div>
            )}

            {!_.isEmpty(this.members_keys) && (
              <div className="fieldGroup">
                <div style={styles.sectionTitle}>
                  Members
                </div>
                <div style={styles.sectionSubTitle}>
                  Has private access
                </div>
                {_.map(({key, item}) => (
                  <Member data={item} key={key} />
                ), this.listMembers())}
              </div>
            )}

            {!_.isEmpty(this.users_keys) && (
              <div className="fieldGroup">
                <div style={styles.sectionTitle}>
                  Users
                </div>
                <div style={styles.sectionSubTitle}>
                  Simple user
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
