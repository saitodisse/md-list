import React from 'react';
import {connect} from 'cerebral-view-react';
import itensKeysComputed from '~/computed/itensKeysComputed';
import styles from './styles';
import Item from './Item';

export default connect({
  items: 'chatList.items',
  itemsKeys: itensKeysComputed(),
},
  class Items extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        srollToCalled: false,
      };
    }

    render() {
      return (
        <div style={styles.itemsContainer} id="itemsContainer">
          {this.props.itemsKeys.map((itemId) => (
            <Item {...this.props} key={itemId} itemId={itemId} />
          ))}
        </div>
      );
    }
  }
);
