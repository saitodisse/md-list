import React from 'react';
import {connect} from 'cerebral-view-react';
import styles from './styles';
import R from 'ramda';
import marked from 'marked';
import highlight from 'highlight.js';
import emojify from 'emojify.js';
import plantumlEncoder from 'plantuml-encoder';

export default connect(props => ({
  // item: `chatList.items.${props.itemId}`,
  current_item: 'chatList.current_item',
  user_id: 'login.user.uid',
  window_size_is_mobile: 'main.window_size_is_mobile',
}), {
  itemClicked: 'chatList.itemClicked',
  removeItemClicked: 'chatList.removeItemClicked',
},
  class Item extends React.Component {
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

    _emojiReplacer = (emoji, name) => {
      return `![${emoji}](https://cdnjs.cloudflare.com/ajax/libs/emojify.js/1.1.0/images/basic/${name}.png#emoji-img)`;
    }

    _plantUML_image = (content) => {
      const puml_regex = /```puml\n([\s\S]*?)\n```/g;
      const puml_matches = [];
      let match_result = puml_regex.exec(content);
      while (match_result !== null) {
        puml_matches.push({
          full: match_result[0],
          content: match_result[1]
        });
        match_result = puml_regex.exec(content);
      }

      const result = puml_matches.reduce((prev, curr) => {
        const puml_code = curr.content;
        const encoded = plantumlEncoder.encode(puml_code);
        const img_url = 'https://www.plantuml.com/plantuml/img/' + encoded;
        return prev.split(curr.full).join(`![puml_code](${img_url})`);
      }, content);

      return result;
    }

    renderMarkdown = () => {
      const md_with_puml = this._plantUML_image(String(this.props.item.body));
      const md_with_emoji = emojify.replace(String(md_with_puml), this._emojiReplacer);
      const mdHtml = marked(md_with_emoji);
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

      const me_id = this.props.user_id;
      const item_uid = this.props.item.user_id;
      const is_my_item = (me_id === item_uid);

      return (
        <div style={styles.messageContainer} id="messageContainer">

          <div style={styles.userPhotoContainer} id="userPhotoContainer">
            <img style={styles.userPhoto} id="userPhoto" src={this.props.item.photoURL} alt="photo" />
          </div>

          <div style={styles.bodyContainer} id="bodyContainer">
            <div style={styles.topBodyContainer} id="topBodyContainer">
              <div style={styles.userName} id="userName" className={is_my_item ? 'userNameMe' : 'userNameOther'}>
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
