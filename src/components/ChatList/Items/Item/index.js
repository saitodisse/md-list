import Inferno from 'inferno';
import Component from 'inferno-component';
import {connect} from 'cerebral-view-inferno';
import styles from './styles';
import R from 'ramda';
import marked from 'marked';
import highlight from 'highlight.js';

export default connect(props => ({
  item: `chatList.items.${props.itemId}`,
  current_item: 'chatList.current_item',
  user_uid: 'login.user.uid',
}), {
  itemClicked: 'chatList.itemClicked',
  removeItemClicked: 'chatList.removeItemClicked',
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
      const mdHtml = marked(String(this.props.item.body));
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

      const current_uid = this.props.user_uid;
      const item_uid = this.props.item.uid;
      const is_my_item = (current_uid === item_uid);

      return (
        <div style={styles.messageContainer} id="messageContainer">

          <div style={styles.userPhotoContainer} id="userPhotoContainer">
            <img style={styles.userPhoto} id="userPhoto" src={this.props.item.photoURL} alt="photo" />
          </div>

          <div style={styles.bodyContainer} id="bodyContainer">
            <div style={styles.topBodyContainer} id="topBodyContainer">
              <div style={styles.userName} id="userName">
                {this.props.item.displayName}
              </div>

                {is_my_item && (
                <div style={styles.buttonsContainer} id="buttonsContainer">
                  <div
                    style={styles.editButton} id="editButton"
                    onClick={this._onEdit}
                  >
                    edit
                  </div>
                  <div
                    style={styles.deleteButton} id="deleteButton"
                    onClick={() => this.props.removeItemClicked({id: this.props.item.id})}
                  >
                    delete
                  </div>
                </div>
                )}
            </div>

            <div style={itemStyle}>
              <div
                style={valueStyle}
                dangerouslySetInnerHTML={this.renderMarkdown()}
              / >
            </div>

          </div>

        </div>
      );
    }

  }
);
