import Inferno from 'inferno'
import {connect} from 'cerebral-view-inferno'
import styles from './styles';

export default connect({
  items: 'listApp.items'
},
  function Items(props) {
    return (
      <div style={styles.itemsContainer}>
        {props.items.map((item, index) => (
          <div key={index} style={styles.item}>
            <div style={styles.id}>
              {item.id && item.id}
            </div>
            <div style={styles.value}>
              <span> {item.title}</span>
            </div>
            <div style={styles.isNew}>
              <span> {item.$isNew ? '(New)' : '(Old)'}</span>
            </div>
          </div>
        ))}
      </div>
    )
  }
)
