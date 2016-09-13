import deepExtend from 'deep-extend';
import styles from './styles.js';

export default deepExtend({}, styles, {
  value: {
    fontSize: 18,
  },
  valueSelected: {
    fontSize: 18,
  },
  editButton: {
    fontSize: 18,
  },
  deleteButton: {
    marginLeft: 7,
    fontSize: 18,
  },

});
