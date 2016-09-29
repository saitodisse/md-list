import React from 'react';
import {connect} from 'cerebral-view-react';
import _ from 'lodash/fp';
import autosize from 'autosize';
import itemsListCountComputed from '~/computed/itemsListCountComputed';
import styles from './styles';

export default connect({
  is_logged: 'login.is_logged',
  is_saving: 'main.is_saving',
  current_item_id: 'chatList.current_item.id',
  current_item_body: 'chatList.current_item.body',
  itemsCount: itemsListCountComputed(),
  window_size_is_mobile: 'main.window_size_is_mobile',
  all_loaded: 'main.all_loaded',
  user_configurations: 'login.user.configurations.*',
}, {
  redirectedToLogin: 'main.redirectedToLogin',
  currentUserRequested: 'login.currentUserRequested',
  currentItemChanged: 'chatList.currentItemChanged',
  currentItemSubmitted: 'chatList.currentItemSubmitted',

  updateItemSubmitted: 'chatList.updateItemSubmitted',
  editCanceled: 'chatList.editCanceled',
},
  class ChatList extends React.Component {

    static autosizeLoaded = false;

    componentDidUpdate(prevProps) {
      // focus after server actions
      if (prevProps.is_saving && !this.props.is_saving) {
        this._setFocusOnTextArea();
      }

      // load autosize for the first time
      if (this.textareaNode && !this.autosizeLoaded) {
        autosize(this.textareaNode);
        this.autosizeLoaded = true;
      }

      // update when current_item changes
      if (prevProps.current_item_id !== this.props.current_item_id) {
        autosize.update(this.textareaNode);
        this._setFocusOnTextArea();
      }

      if (prevProps.window_size_is_mobile !== this.props.window_size_is_mobile) {
        // send_on_enter
        const getConfiguration = (curr, path, orValue) => {
          const currConfig = _.getOr(orValue, path, curr);
          return currConfig;
        };
        let send_on_enter = null;
        if (this.props.window_size_is_mobile) {
          send_on_enter = getConfiguration(
            this.props.user_configurations,
            ['mobile', 'send_on_enter'],
            true);
        } else {
          send_on_enter = getConfiguration(
            this.props.user_configurations,
            ['desktop', 'send_on_enter'],
            true);
        }
        this.send_on_enter = send_on_enter;
      }
    }

    _setFocusOnTextArea() {
      if (!this.props.window_size_is_mobile) {
        this.textareaNode.focus();
      }
    }

    _OnTextKeyDown = (event) => {
      const submit_on_enter = (
           this.send_on_enter
        && event.keyCode === 13
        && !event.shiftKey
      );
      const submit_on_ctrl_enter = (
           !this.send_on_enter
        && event.keyCode === 13
        && event.ctrlKey
      );
      if (submit_on_enter || submit_on_ctrl_enter) {
        event.preventDefault();
        this._OnSubmit();
      }
    }

    _OnSubmit = () => {
      const value = _.trim(this.textareaNode.value);

      this.props.currentItemChanged({
        body: value
      });

      const hasValue = !_.isEmpty(value);
      if (hasValue) {
        this.props.currentItemSubmitted({
          id: this.props.current_item_id
        });
      }
      this._setFocusOnTextArea();

      // update textarea size
      this.textareaNode.value = '';
      autosize.update(this.textareaNode);
    }

    _onKeyDown = (e) => {
      // ESC
      if (e.keyCode === 27) {
        this.props.editCanceled();
      }
      // FIXME: send signals do mainSection ChatList comonent
      // if (this.textareaNode.value.length === 0) {
      //   // UP
      //   if (e.keyCode === 38 || e.keyCode === 104) {
      //     window.requestAnimationFrame(() => {
      //       this.messagesNode.scrollTop = this.messagesNode.scrollTop - 30;
      //     });
      //   }
      //   // PAGE UP
      //   if (e.keyCode === 33) {
      //     window.requestAnimationFrame(() => {
      //       this.messagesNode.scrollTop = this.messagesNode.scrollTop - this.messagesNode.offsetHeight;
      //     });
      //   }

      //   // DOWN
      //   if (e.keyCode === 40 || e.keyCode === 98) {
      //     window.requestAnimationFrame(() => {
      //       this.messagesNode.scrollTop = this.messagesNode.scrollTop + 30;
      //     });
      //   }
      //   // PAGE DOWN
      //   if (e.keyCode === 34) {
      //     window.requestAnimationFrame(() => {
      //       this.messagesNode.scrollTop = this.messagesNode.scrollTop + this.messagesNode.offsetHeight;
      //     });
      //   }
      // }
    }

    render() {
      return (
        <div style={styles.input} id="input">

          <div style={styles.inputContainer} id="inputContainer">
            {/* http://stackoverflow.com/questions/13224520/css3-new-style-flexbox-fails-to-stretch-textarea-in-chrome */}
            <div style={styles.textareaContainer} id="textareaContainer">
              <textarea
                id="my_textarea"
                style={this.props.error ? styles.textareaError : styles.textarea}
                autoFocus
                type="text"
                ref={node => {this.textareaNode = node;}}
                disabled={this.props.is_saving}
                value={this.props.current_item_body}
                onChange={event => this.props.currentItemChanged({body: event.target.value})}
                onKeyDown={this._OnTextKeyDown}
                rows={1}
              />
            </div>

            <div style={styles.sendContainer} id="sendContainer">
              <button
                style={styles.button} id="button"
                onClick={this._OnSubmit}
              >
                Send
              </button>
            </div>

          </div>

          <div style={styles.bellowTextareaContainer} id="bellowTextareaContainer">
            <div style={styles.itemsCount} id="itemsCount">
              count: { this.props.itemsCount }
            </div>
            <div style={styles.current_item} id="current_item">
              id: {this.props.current_item_id ? this.props.current_item_id : 'new item'}
            </div>
            <div style={styles.shortcuts} id="shortcuts">
              Ctrl + Enter (send)
            </div>
          </div>
        </div>
      );
    }

  }
);
