import Inferno from 'inferno';
import Component from 'inferno-component';
import {connect} from 'cerebral-view-inferno';
import styles from './styles';
import stylesMobile from './styles-mobile';
import R from 'ramda';
import marked from 'marked';
import highlight from 'highlight.js';

export default connect(props => ({
  item: `chatList.items.${props.itemId}`,
  current_item: 'chatList.current_item',
  user_id: 'login.user.uid',
  window_size_is_mobile: 'main.window_size_is_mobile',
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

      const currentStyle = this.props.window_size_is_mobile ? stylesMobile : styles;

      const $isCurrentItem = (this.props.current_item.id === this.props.item.id);
      const valueStyle = $isCurrentItem ? currentStyle.valueSelected : currentStyle.value;

      const $isNewItem = this.props.item.$isNew;
      const itemStyle = $isNewItem ? currentStyle.itemNewContainer : currentStyle.itemContainer;

      const me_id = this.props.user_id;
      const item_uid = this.props.item.user_id;
      const is_my_item = (me_id === item_uid);

      const userNameStyle = currentStyle.userName;
      if (is_my_item) {
        userNameStyle.color = '#437b58';
      } else {
        userNameStyle.color = '#4f58d8';
      }

      return (
        <div style={currentStyle.messageContainer} id="messageContainer">

          <div style={currentStyle.userPhotoContainer} id="userPhotoContainer">
            <img style={currentStyle.userPhoto} id="userPhoto" src={this.props.item.photoURL} alt="photo" />
          </div>

          <div style={currentStyle.bodyContainer} id="bodyContainer">
            <div style={currentStyle.topBodyContainer} id="topBodyContainer">
              <div style={userNameStyle} id="userName">
                {this.props.item.displayName}
              </div>

                {is_my_item && (
                <div style={currentStyle.buttonsContainer} id="buttonsContainer">
                  <div
                    style={currentStyle.editButton} id="editButton"
                    onClick={this._onEdit}
                  >
                    edit
                  </div>
                  <div
                    style={currentStyle.deleteButton} id="deleteButton"
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
