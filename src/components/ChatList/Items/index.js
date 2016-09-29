import React from 'react';
import {connect} from 'cerebral-view-react';
// import itensKeysComputed from '~/computed/itensKeysComputed';
import styles from './styles';
import Item from './Item';
import _ from 'lodash/fp';

export default connect({
  items: 'chatList.items.*',
  is_ready: 'chatList.is_ready',
  // itemsKeys: itensKeysComputed(),
},
  class Items extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        srollToCalled: false,
      };
    }

    render() {
      let itemsContainerStyle;
      if (this.props.is_ready) {
        itemsContainerStyle = _.merge(styles.itemsContainer, {opacity: 1});
      } else {
        itemsContainerStyle = _.merge(styles.itemsContainer, {opacity: 0.3});
      }
      return (
        <div style={itemsContainerStyle} id="itemsContainer">
          {Object.keys(this.props.items).map((itemKey) => (
            <Item {...this.props} key={itemKey} item={this.props.items[itemKey]} />
          ))}
        </div>
      );
    }
  }
);
