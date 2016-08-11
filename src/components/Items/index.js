import Inferno from 'inferno';
import {connect} from 'cerebral-view-inferno';
import styles from './styles';
import itemsListComputed from '../../computed/itemsListComputed';
import Item from '../Item';

export default connect({
  items: 'listApp.items',
  listKeys: itemsListComputed(),
},
  function Items(props) {
    return (
      <div style={styles.itemsContainer}>
        {props.listKeys.map((itemId) => (
          <Item itemId={itemId} />
        ))}
      </div>
    );
  }
);
