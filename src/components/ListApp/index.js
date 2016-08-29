import Inferno from 'inferno';
import Component from 'inferno-component';
import {connect} from 'cerebral-view-inferno';
import R from 'ramda';
import autosize from 'autosize';
import itemsListCountComputed from '~/computed/itemsListCountComputed';
import Items from './Items';
import styles from './styles';

export default connect({
  is_saving: 'listApp.is_saving',
  current_item: 'listApp.current_item',
  itemsCount: itemsListCountComputed(),
  error: 'listApp.error',
}, {
  newItemTitleSubmitted: 'listApp.newItemTitleSubmitted',
  updateItemTitleSubmitted: 'listApp.updateItemTitleSubmitted',
  newItemTitleChanged: 'listApp.newItemTitleChanged',
  pageLoaded: 'listApp.pageLoaded',
  itemClicked: 'listApp.itemClicked',
  removeItemClicked: 'listApp.removeItemClicked',
  removeAllItemsClicked: 'listApp.removeAllItemsClicked',
  editCanceled: 'listApp.editCanceled',
},
  class ListApp extends Component {

    static autosizeLoaded = false;

    componentDidUpdate(prevProps) {
      // focus after server actions
      if (prevProps.is_saving && !this.props.is_saving) {
        this.textareaNode.focus();
      }

      // load autosize for the first time
      if (this.textareaNode && !this.autosizeLoaded) {
        autosize(this.textareaNode);
        this.autosizeLoaded = true;
      }

      // update when current_item changes
      if (prevProps.current_item.id !== this.props.current_item.id) {
        autosize.update(this.textareaNode);
        this.textareaNode.focus();
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


    componentDidMount() {
      this.props.pageLoaded();
    }

    _OnTextKeyDown = (event) => {
      /**/console.log({event});/* -debug- */
      /**/console.log({keyCode: event.keyCode});/* -debug- */
      if (event.keyCode === 13 && event.ctrlKey) {
        event.preventDefault();
        this._OnSubmit();
      }
    }

    _OnSubmit = () => {
      const value = R.trim(this.props.current_item.title);
      const hasValue = !R.isEmpty(value);
      const isUpdating = !R.isNil(this.props.current_item.id);
      if (hasValue) {
        if (isUpdating) {
          this.props.updateItemTitleSubmitted({
            id: this.props.current_item.id
          });
        } else {
          this.props.newItemTitleSubmitted();
        }
      }
      this.textareaNode.focus();

      // update textarea size
      this.textareaNode.value = '';
      autosize.update(this.textareaNode);
    }

    onInputChange(event) {
      this.props.newItemTitleChanged({
        title: event.target.value
      });
    }

    _onKeyDown = (e) => {
      // ESC
      if (e.keyCode === 27) {
        this.props.editCanceled();
      }
      if (this.props.current_item.title.length === 0) {
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
        <div style={styles.container} onKeyDown={this._onKeyDown}>
          <div
            style={styles.messages}
            onAttached={node => {this.messagesNode = node;}}>
            <Items />
          </div>

          <div style={styles.input}>

            <div style={styles.inputContainer}>
              {/* http://stackoverflow.com/questions/13224520/css3-new-style-flexbox-fails-to-stretch-textarea-in-chrome */}
              <div style={styles.textareaContainer}>
                <textarea
                  id="my_textarea"
                  style={this.props.error ? styles.textareaError : styles.textarea}
                  autoFocus
                  type="text"
                  onAttached={node => {this.textareaNode = node;}}
                  disabled={this.props.is_saving}
                  value={this.props.current_item.title}
                  onInput={event => this.onInputChange(event)}
                  onKeyDown={this._OnTextKeyDown}
                />
              </div>

              <div style={styles.actionsContainer}>

                <button
                  style={styles.button}
                  onClick={this._OnSubmit}
                >
                  Send
                </button>

                <button
                  style={styles.actionsContainerButtonRemove}
                  onClick={this.props.removeAllItemsClicked}
                >
                  remove all
                </button>
              </div>

            </div>

            <div style={styles.bellowTextareaContainer}>
              <div style={styles.itemsCount}>
                count: { this.props.itemsCount }
              </div>
              <div style={styles.current_item}>
                id: {this.props.current_item.id ? this.props.current_item.id : 'new item'}
              </div>
              <div style={styles.shortcuts}>
                Ctrl + Enter (send)
              </div>
            </div>

            <div style={styles.error}>
              {this.props.error}
            </div>
          </div>

        </div>
      );
    }

  }
);
