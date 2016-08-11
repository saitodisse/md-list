import Inferno from 'inferno'
import {connect} from 'cerebral-view-inferno'
import styles from './styles';

export default connect(props => ({
  item: `listApp.items.${props.itemId}`
}),
  function User(props) {
    return (
      <div style={styles.item}>
        <div style={styles.id}>
          {props.item.id && props.item.id}
        </div>
        <div style={styles.value}>
          <span> {props.item.title}</span>
        </div>
        <div style={styles.isNew}>
          <span> {props.item.$isNew ? '(New)' : '(Old)'}</span>
        </div>
      </div>
    )
  }
)
