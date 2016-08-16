import Inferno from 'inferno';
import Component from 'inferno-component';
import {connect} from 'cerebral-view-inferno';
import styles from './styles';
import itemsListComputed from '../../../computed/itemsListComputed';
import Item from './Item';

export default connect({
  items: 'listApp.items',
  listKeys: itemsListComputed(),
},
  class Items extends Component {
    render() {
      return (
        <div style={styles.itemsContainer}>
          {this.props.listKeys.map((itemId) => (
            <Item {...this.props} key={itemId} itemId={itemId} />
          ))}
        </div>
      );
    }
  }
);
