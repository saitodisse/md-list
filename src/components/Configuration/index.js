import React from 'react';
import {connect} from 'cerebral-view-react';
import styles from './styles';

export default connect({
  edit_other_users_items: 'configuration.edit_other_users_items',
  restricted_access_to_members: 'configuration.restricted_access_to_members',
}, {
  pageLoaded: 'configuration.pageLoaded',
  editOtherUsersItemsClicked: 'configuration.editOtherUsersItemsClicked',
  restrictedAccessToMembersClicked: 'configuration.restrictedAccessToMembersClicked',
},
  class Configuration extends React.Component {
    componentDidMount() {
      this.props.pageLoaded();
    }
    render() {
      return (
        <div style={styles.container} className="container">

          <section className="title">
            Configurations
          </section>

          <section className="fields">
            <div style={styles.fieldContainer} className="fieldContainer">
              <div style={styles.label} className="label">
                User can edit others users items
              </div>
              <div style={styles.value} className="value">
                <input
                  type="checkbox"
                  checked={this.props.edit_other_users_items}
                  onClick={(ev) => this.props.editOtherUsersItemsClicked({
                    value: ev.target.checked
                  })}
                />
              </div>
            </div>
            <div style={styles.fieldContainer} className="fieldContainer">
              <div style={styles.label} className="label">
                Only members can read and post items
              </div>
              <div style={styles.value} className="value">
                <input
                  type="checkbox"
                  checked={this.props.restricted_access_to_members}
                  onClick={(ev) => this.props.restrictedAccessToMembersClicked({
                    value: ev.target.checked
                  })}
                />
              </div>
            </div>
          </section>

        </div>
      );
    }

  }
);
