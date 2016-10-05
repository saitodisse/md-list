import React from 'react';
import {connect} from 'cerebral-view-react';
import styles from './styles';
import Item from './Item';
import _ from 'lodash/fp';

export default connect({
  is_ready: 'chatList.is_ready',
},
  class Items extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        srollToCalled: false,
      };
    }

    _getSortedItems = () => {
      const sorted = _.sortBy(['created_at'], this.props.items);
      const sorted_keys = _.keyBy('id', sorted);
      return Object.keys(sorted_keys);
    };

    render() {
      let itemsContainerStyle;
      if (this.props.is_ready) {
        itemsContainerStyle = _.merge(styles.itemsContainer, {opacity: 1});
      } else {
        itemsContainerStyle = _.merge(styles.itemsContainer, {opacity: 0.3});
      }
      return (
        <div style={itemsContainerStyle} id="itemsContainer">
          {this._getSortedItems().map((itemKey) => (
            <Item {...this.props} key={itemKey} item={this.props.items[itemKey]} />
          ))}
        </div>
      );
    }
  }
);
