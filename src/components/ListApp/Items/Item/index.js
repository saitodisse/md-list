import Inferno from 'inferno';
import {connect} from 'cerebral-view-inferno';
import styles from './styles';
import R from 'ramda';

export default connect(props => ({
  item: `listApp.items.${props.itemId}`,
  currentItem: 'listApp.currentItem',
}),
  function Item(props) {
    // check if item exists
    if (!R.pathOr(false, ['item'], props)) {
      return null;
    }

    const signals = props.signals.listApp;
    const isCurrentItem = (props.currentItem.id === props.item.id);
    const valueStyle = isCurrentItem ? styles.valueSelected : styles.value;

    return (
      <div style={styles.itemContainer}>

        <div style={styles.topContainer}>
          {/* ID */}
          <div
            style={styles.id}
            onClick={() => signals.itemClicked({id: props.item.id})}
          >
            {props.item.id && props.item.id}
          </div>
          {/* remove button */}
          <button
            style={styles.removeButton}
            onClick={() => signals.removeItemClicked({id: props.item.id})}
          >
            X
          </button>
        </div>

        {/* title */}
        <div
          style={styles.valueContainer}
          onClick={() => signals.itemClicked({id: props.item.id})}
        >
          <pre style={valueStyle}>
            {props.item.title}
          </pre>
        </div>

        {/* isNew badge */}
        <div style={styles.isNew}>
          <span> {props.item.$isNew ? '(New)' : '(Old)'}</span>
        </div>
      </div>
    );
  }
);
