import Inferno from 'inferno';
import {connect} from 'cerebral-view-inferno';
import styles from './styles';
import R from 'ramda';

export default connect(props => ({
  item: `listApp.items.${props.itemId}`
}),
  function User(props) {
    // check if item exists
    if (!R.pathOr(false, ['item'], props)) {
      return null;
    }

    return (
      <div style={styles.item}>
        <div style={styles.id}>
          {props.item.id && props.item.id.substring(0, 5)}
        </div>
        <div style={styles.value}>
          <span> {props.item.title}</span>
        </div>
        <div style={styles.isNew}>
          <span> {props.item.$isNew ? '(New)' : '(Old)'}</span>
        </div>
      </div>
    );
  }
);
