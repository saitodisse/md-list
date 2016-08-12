import Inferno from 'inferno';
import {connect} from 'cerebral-view-inferno';
import styles from './styles';
import R from 'ramda';

export default connect(props => ({
  item: `listApp.items.${props.itemId}`,
}),
  function Item(props) {
    // check if item exists
    if (!R.pathOr(false, ['item'], props)) {
      /**/console.error('\n%% ERROR item null \n');/* -debug- */
      return null;
    }

    const signals = props.signals.listApp;

    return (
      <div style={styles.itemContainer}>

        <div style={styles.topContainer}>
          <div
            onClick={() => signals.itemIdClicked({id: props.item.id})}
            style={styles.id}
          >
            {props.item.id && props.item.id}
          </div>
          <button
            style={styles.removeButton}
            onClick={() => signals.removeItemClicked({id: props.item.id})}
          >
            X
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
