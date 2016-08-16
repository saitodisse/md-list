import Inferno from 'inferno';
import Component from 'inferno-component';
import {connect} from 'cerebral-view-inferno';
import styles from './styles';
import R from 'ramda';
import marked from 'marked';
import highlight from 'highlight.js';
require('!style!css!highlight.js/styles/foundation.css');
require('!style!css!./styles.css');

export default connect(props => ({
  item: `listApp.items.${props.itemId}`,
  currentItem: 'listApp.currentItem',
}), {
  itemClicked: 'listApp.itemClicked',
  removeItemClicked: 'listApp.removeItemClicked',
  itemRendered: 'listApp.itemRendered',
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

    componentDidMount() {
      /**/console.log({time_after_: (new Date()).getTime()});/* -debug- */
      this.props.itemRendered({id: this.props.item.id});
    }

    renderMarkdown = () => {
      /**/console.log({time_before: (new Date()).getTime()});/* -debug- */
      const mdHtml = marked(String(this.props.item.title));
      return {__html: mdHtml};
    }

    render() {
      // check if item exists
      if (!R.pathOr(false, ['item'], this.props)) {
        console.error('\n%% ERROR: item is null \n');
        return null;
      }

      const $isCurrentItem = (this.props.currentItem.id === this.props.item.id);
      const valueStyle = $isCurrentItem ? styles.valueSelected : styles.value;

      const $isNewItem = this.props.item.$isNew;
      const itemStyle = $isNewItem ? styles.itemNewContainer : styles.itemContainer;


      return (
        <div style={itemStyle}>

          <div style={styles.topContainer}>
            <button
              style={styles.removeButton}
              onClick={() => this.props.removeItemClicked({id: this.props.item.id})}
            >
              X
            </button>
          </div>

          <div
            style={valueStyle}
            onClick={() => this.props.itemClicked({id: this.props.item.id})}
            dangerouslySetInnerHTML={this.renderMarkdown()}
          / >

        </div>
      );
    }

  }
);
