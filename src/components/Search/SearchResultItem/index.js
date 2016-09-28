import React from 'react';
import {connect} from 'cerebral-view-react';
import styles from './styles';
import _ from 'lodash/fp';

export default connect({
  // is_admin: 'login.user.is_admin',
}, {
  // toggleConfigurationClicked: 'configurations.toggleConfigurationClicked',
},
  class SearchResultItem extends React.Component {
    render() {
      return (
        <pre>
          {JSON.stringify(this.props.data, null, 2)}
        </pre>
      );
    }

  }
);
