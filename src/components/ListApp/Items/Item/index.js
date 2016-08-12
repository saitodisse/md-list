import Inferno from 'inferno';
import {connect} from 'cerebral-view-inferno';
import styles from './styles';
import R from 'ramda';
import marked from 'marked';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

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

    const $isCurrentItem = (props.currentItem.id === props.item.id);
    const valueStyle = $isCurrentItem ? styles.valueSelected : styles.value;

    const $isNewItem = props.item.$isNew;
    const itemStyle = $isNewItem ? styles.itemNewContainer : styles.itemContainer;

    function renderMarkdown() { return {__html: marked(props.item.title)}; }

    return (
      <div style={itemStyle}>

        <div style={styles.topContainer}>
          <button
            style={styles.removeButton}
            onClick={() => signals.removeItemClicked({id: props.item.id})}
          >
            X
          </button>
        </div>

        <div
          style={valueStyle}
          onClick={() => signals.itemClicked({id: props.item.id})}
          dangerouslySetInnerHTML={renderMarkdown()}
        / >

      </div>
    );
  }
);
