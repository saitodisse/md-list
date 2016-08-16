import Inferno from 'inferno';
import Component from 'inferno-component';
import {connect} from 'cerebral-view-inferno';
import Items from './Items';
import styles from './styles';
import R from 'ramda';
import autosize from 'autosize';
import itemsListCountComputed from '../../computed/itemsListCountComputed';

export default connect({
  isSaving: 'listApp.isSaving',
  currentItem: 'listApp.currentItem',
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
      if (prevProps.isSaving && !this.props.isSaving) {
        this.textareaNode.focus();
      }

      // load autosize for the first time
      if (this.textareaNode && !this.autosizeLoaded) {
        autosize(this.textareaNode);
        this.autosizeLoaded = true;
      }

      // update when currentItem changes
      if (prevProps.currentItem.id !== this.props.currentItem.id) {
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
      if (event.keyCode === 13 && event.ctrlKey) {
        event.preventDefault();
        this._OnSubmit();
      }
    }

    _OnSubmit = () => {
      const value = R.trim(this.props.currentItem.title);
      const hasValue = !R.isEmpty(value);
      const isUpdating = !R.isNil(this.props.currentItem.id);
      if (hasValue) {
        if (isUpdating) {
          this.props.updateItemTitleSubmitted({
            id: this.props.currentItem.id
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
    }

    render() {
      return (
        <div style={styles.container} onKeyDown={this._onKeyDown}>

          <div style={styles.title}>
            <h3>
              MD list
            </h3>
          </div>

          <div
            style={styles.messages}
            onAttached={node => {this.messagesNode = node;}}>
            <Items {...this.props}/>
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
                  disabled={this.props.isSaving}
                  value={this.props.currentItem.title}
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
              <div style={styles.currentItem}>
                id: {this.props.currentItem.id ? this.props.currentItem.id : 'new item'}
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
