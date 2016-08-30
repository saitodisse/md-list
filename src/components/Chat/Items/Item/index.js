import Inferno from 'inferno';
import Component from 'inferno-component';
import {connect} from 'cerebral-view-inferno';
import styles from './styles';
import R from 'ramda';
import marked from 'marked';
import highlight from 'highlight.js';

export default connect(props => ({
  item: `listApp.items.${props.itemId}`,
  current_item: 'listApp.current_item',
}), {
  itemClicked: 'listApp.itemClicked',
  removeItemClicked: 'listApp.removeItemClicked',
},
  class Item extends Component {
    constructor(props) {
      super(props);

      // Highlight Code
      marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false,
        highlight: (code) => {
          return highlight.highlightAuto(code).value;
        }
      });

      this.state = {};
    }

    renderMarkdown = () => {
      const mdHtml = marked(String(this.props.item.title));
      return {__html: mdHtml};
    }

    _onEdit = () => {
      this.props.itemClicked({id: this.props.item.id});
    }

    render() {
      // check if item exists
      if (!R.pathOr(false, ['item'], this.props)) {
        console.error('\n%% ERROR: item is null \n');
        return null;
      }

      const $isCurrentItem = (this.props.current_item.id === this.props.item.id);
      const valueStyle = $isCurrentItem ? styles.valueSelected : styles.value;

      const $isNewItem = this.props.item.$isNew;
      const itemStyle = $isNewItem ? styles.itemNewContainer : styles.itemContainer;


      return (
        <div style={styles.messageContainer}>
          <div style={itemStyle}>
            <div
              style={valueStyle}
              dangerouslySetInnerHTML={this.renderMarkdown()}
            / >
          </div>

          <div style={styles.buttonsContainer}>
            <div
              style={styles.editButton}
              onClick={this._onEdit}
            >
              edit
            </div>
            <div
              style={styles.deleteButton}
              onClick={() => this.props.removeItemClicked({id: this.props.item.id})}
            >
              delete
            </div>
          </div>

        </div>
      );
    }

  }
);
