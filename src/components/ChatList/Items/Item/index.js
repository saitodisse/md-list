import React from 'react';
import {connect} from 'cerebral-view-react';
import styles from './styles';
import _ from 'lodash/fp';
import marked from 'marked';
import highlight from 'highlight.js';
import emojify from 'emojify.js';
import plantumlEncoder from 'plantuml-encoder';

export default connect(_props => ({
  // item: `chatList.items.${props.itemId}`,
  current_item: 'chatList.current_item',
  user_id: 'login.user.uid',
  window_size_is_mobile: 'main.window_size_is_mobile',
  configurations: 'configurations.*',
  user_configurations: 'login.user.configurations.*',
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

    // optimizations
    shouldComponentUpdate(nextProps, _nextState) {
      // body changed
      const body_changed = (
        this.props.item.body !== nextProps.item.body
      );
      if (body_changed) {
        return true;
      }

      const item_id = this.props.item.id;
      const new_current_item_id = _.getOr(null, ['id'], nextProps.current_item);
      const is_current_item = (item_id === new_current_item_id);

      // item was selected
      if (is_current_item) {
        return true;
      }

      // item was deselected
      const old_current_item_id = _.getOr(null, ['id'], this.props.current_item);
      const was_current_item = (
           old_current_item_id === item_id
        && (
               old_current_item_id !== new_current_item_id
            || new_current_item_id === null
           )
      );
      if (!is_current_item && was_current_item) {
        return true;
      }

      // window change width
      const window_width_changed = (
        this.props.window_size_is_mobile !== nextProps.window_size_is_mobile
      );
      if (window_width_changed) {
        return true;
      }

      // configurations changed
      function checkConfiguration(curr, next, path) {
        const currConfig = _.getOr(false, path, curr);
        const nextConfig = _.getOr(false, path, next);
        return currConfig !== nextConfig;
      }
      const configurations_changed = (
           this.props.user_configurations
        &&  (   checkConfiguration(
                  this.props.configurations,
                  nextProps.configurations,
                  ['desktop', 'font_size']
                )
              || checkConfiguration(
                  this.props.user_configurations,
                  nextProps.user_configurations,
                  ['mobile', 'font_size']
                )
              || checkConfiguration(
                  this.props.configurations,
                  nextProps.configurations,
                  ['desktop', 'show_edit_button']
                )
              || checkConfiguration(
                  this.props.user_configurations,
                  nextProps.user_configurations,
                  ['mobile', 'show_edit_button']
                )
              || checkConfiguration(
                  this.props.configurations,
                  nextProps.configurations,
                  ['desktop', 'show_delete_button']
                )
              || checkConfiguration(
                  this.props.user_configurations,
                  nextProps.user_configurations,
                  ['mobile', 'show_delete_button']
                )
              || checkConfiguration(
                  this.props.configurations,
                  nextProps.configurations,
                  ['desktop', 'send_on_enter']
                )
              || checkConfiguration(
                  this.props.user_configurations,
                  nextProps.user_configurations,
                  ['mobile', 'send_on_enter']
                )
              || checkConfiguration(
                  this.props.configurations,
                  nextProps.configurations,
                  ['app', 'edit_other_users_items']
                )
            )
      );
      if (configurations_changed) {
        return true;
      }


      return false;
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
      if (!this.props.item) {
        console.error('\n%% ERROR: item is null \n');
        return null;
      }

      const $isCurrentItem = (this.props.current_item.id === this.props.item.id);

      let valueStyle = styles.value;
      if ($isCurrentItem) {
        valueStyle = styles.valueSelected;
      }

      // Configurations
      // --------------
      // responsive: font-size
      function getConfiguration(curr, path, orValue) {
        const currConfig = _.getOr(orValue, path, curr);
        return currConfig;
      }
      if (this.props.window_size_is_mobile) {
        valueStyle.fontSize = `${getConfiguration(this.props.user_configurations, ['mobile', 'font_size'], 20)}px`;
      } else {
        valueStyle.fontSize = `${getConfiguration(this.props.user_configurations, ['desktop', 'font_size'], 16)}px`;
      }
      // show edit button
      let show_edit_button = null;
      if (this.props.window_size_is_mobile) {
        show_edit_button = getConfiguration(
          this.props.user_configurations,
          ['mobile', 'show_edit_button'],
          true);
      } else {
        show_edit_button = getConfiguration(
          this.props.user_configurations,
          ['desktop', 'show_edit_button'],
          true);
      }
      // show delete button
      let show_delete_button = null;
      if (this.props.window_size_is_mobile) {
        show_delete_button = getConfiguration(
          this.props.user_configurations,
          ['mobile', 'show_delete_button'],
          true);
      } else {
        show_delete_button = getConfiguration(
          this.props.user_configurations,
          ['desktop', 'show_delete_button'],
          true);
      }

      const $isNewItem = this.props.item.$isNew;
      const itemStyle = $isNewItem ? styles.itemNewContainer : styles.itemContainer;

      const me_id = this.props.user_id;
      const item_uid = this.props.item.user_id;
      const is_my_item = (me_id === item_uid);
      const edit_other_users_items = _.getOr(false, ['app', 'edit_other_users_items'], this.props.configurations);

      return (
        <div style={styles.messageContainer} id={this.props.item.id}>

          <div style={styles.userPhotoContainer} id="userPhotoContainer">
            <img style={styles.userPhoto} id="userPhoto" src={this.props.item.photoURL} alt="photo" />
          </div>

          <div style={styles.bodyContainer} id="bodyContainer">
            <div style={styles.topBodyContainer} id="topBodyContainer">
              <div style={styles.userName} id="userName" className={is_my_item ? 'userNameMe' : 'userNameOther'}>
                {this.props.item.displayName}
              </div>
              <div style={styles.dateTime} id="dateTime" className={is_my_item ? 'userNameMe' : 'userNameOther'}>
                {`${(new Date(this.props.item.created_at)).toLocaleDateString()} ${(new Date(this.props.item.created_at)).toLocaleTimeString()}`}
              </div>

                {(is_my_item || edit_other_users_items) && (
                <div style={styles.buttonsContainer} id="buttonsContainer">
                  {show_edit_button && (
                    <div
                      style={styles.editButton} id="editButton"
                      onClick={this._onEdit}
                    >
                      edit
                    </div>
                  )}
                  {show_delete_button && (
                    <div
                      style={styles.deleteButton} id="deleteButton"
                      onClick={() => this.props.removeItemClicked({id: this.props.item.id})}
                    >
                      delete
                    </div>
                  )}
                </div>
                )}
            </div>

            <div style={itemStyle}>
              <div
                style={_.clone(valueStyle)}
                dangerouslySetInnerHTML={this.renderMarkdown()}
              / >
            </div>

          </div>

        </div>
      );
    }

  }
);
