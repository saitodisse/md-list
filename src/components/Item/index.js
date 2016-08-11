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
      <div style={styles.itemContainer}>

        <div style={styles.topContainer}>
          <div style={styles.id}>
            {props.item.id && props.item.id}
          </div>
          <button
            style={styles.removeButton}
            onClick={() => this.props.removeItemClicked(props.item.id)}
          >
            remove
          </button>
        </div>

        <div style={styles.valueContainer}>
          <pre style={styles.value}>
            {props.item.title}
          </pre>
        </div>

        <div style={styles.isNew}>
          <span> {props.item.$isNew ? '(New)' : '(Old)'}</span>
        </div>
      </div>
    );
  }
);
