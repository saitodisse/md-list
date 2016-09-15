import React from 'react';
import {connect} from 'cerebral-view-react';
import R from 'ramda';
import autosize from 'autosize';
import itemsListCountComputed from '~/computed/itemsListCountComputed';
import Items from './Items';
import styles from './styles';

export default connect({
  is_logged: 'login.is_logged',
  is_saving: 'chatList.is_saving',
  current_item: 'chatList.current_item',
  itemsCount: itemsListCountComputed(),
  error: 'chatList.error',
  window_size_is_mobile: 'main.window_size_is_mobile',
}, {
  redirectToLogin: 'main.redirectToLogin',
  currentUserRequested: 'login.currentUserRequested',
  currentItemChanged: 'chatList.currentItemChanged',
  currentItemSubmitted: 'chatList.currentItemSubmitted',

  updateItemSubmitted: 'chatList.updateItemSubmitted',
  editCanceled: 'chatList.editCanceled',
},
  class ChatList extends React.Component {

    static autosizeLoaded = false;

    componentDidMount() {
      if (!this.props.is_logged) {
        this.props.redirectToLogin();
      }
    }

    componentDidUpdate(prevProps) {
      // redirect to login if is_logged === false
      if (prevProps.is_logged !== this.props.is_logged) {
        if (!this.props.is_logged) {
          this.props.redirectToLogin();
        }
      }

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
      if (prevProps.current_item.id !== this.props.current_item.id) {
        autosize.update(this.textareaNode);
        this._setFocusOnTextArea();
      }

      if (this.props.itemsCount > prevProps.itemsCount) {
        window.requestAnimationFrame(() => {
          this.messagesNode.scrollTop = this.messagesNode.scrollHeight;
          if (this.messagesNode !== undefined) {
            this.messagesNode.scrollTop = this.messagesNode.scrollHeight;
          }
        });
      }
    }

    _setFocusOnTextArea() {
      if (!this.props.window_size_is_mobile) {
        this.textareaNode.focus();
      }
    }

    _OnTextKeyDown = (event) => {
      if (event.keyCode === 13 && event.ctrlKey) {
        event.preventDefault();
        this._OnSubmit();
      }
    }

    _OnSubmit = () => {
      const value = R.trim(this.textareaNode.value);

      this.props.currentItemChanged({
        body: value
      });

      const hasValue = !R.isEmpty(value);
      if (hasValue) {
        this.props.currentItemSubmitted({
          id: this.props.current_item.id
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
      if (this.textareaNode.value.length === 0) {
        // UP
        if (e.keyCode === 38 || e.keyCode === 104) {
          window.requestAnimationFrame(() => {
            this.messagesNode.scrollTop = this.messagesNode.scrollTop - 30;
          });
        }
        // PAGE UP
        if (e.keyCode === 33) {
          window.requestAnimationFrame(() => {
            this.messagesNode.scrollTop = this.messagesNode.scrollTop - this.messagesNode.offsetHeight;
          });
        }

        // DOWN
        if (e.keyCode === 40 || e.keyCode === 98) {
          window.requestAnimationFrame(() => {
            this.messagesNode.scrollTop = this.messagesNode.scrollTop + 30;
          });
        }
        // PAGE DOWN
        if (e.keyCode === 34) {
          window.requestAnimationFrame(() => {
            this.messagesNode.scrollTop = this.messagesNode.scrollTop + this.messagesNode.offsetHeight;
          });
        }
      }
    }

    render() {
      return (
        <div style={styles.container} id="container" onKeyDown={this._onKeyDown}>
          <div
            style={styles.messages} id="messages"
            ref={node => {this.messagesNode = node;}}>
            <Items />
          </div>

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
                  value={this.props.current_item.body}
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
                id: {this.props.current_item.id ? this.props.current_item.id : 'new item'}
              </div>
              <div style={styles.shortcuts} id="shortcuts">
                Ctrl + Enter (send)
              </div>
            </div>

            <div style={styles.error} id="error">
              {this.props.error}
            </div>
          </div>

        </div>
      );
    }

  }
);
