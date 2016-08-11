import Inferno from 'inferno';
import Component from 'inferno-component';
import {connect} from 'cerebral-view-inferno';
import Items from './Items';
import styles from './styles';
import R from 'ramda';

export default connect({
  newItemTitle: 'listApp.newItemTitle',
  isSaving: 'listApp.isSaving',
  error: 'listApp.error',
}, {
  newItemTitleSubmitted: 'listApp.newItemTitleSubmitted',
  newItemTitleChanged: 'listApp.newItemTitleChanged',
  pageLoaded: 'listApp.pageLoaded',
  removeItemClicked: 'listApp.removeItemClicked',
  removeAllItemsClicked: 'listApp.removeAllItemsClicked',
},
  class ListApp extends Component {

    componentDidUpdate(prevProps) {
      if (prevProps.isSaving && !this.props.isSaving) {
        this.input.focus();
      }
    }

    componentDidMount() {
      this.props.pageLoaded();
    }

    _OnTextKeyDown = (event) => {
      if (event.keyCode === 13 && event.ctrlKey) {
        this._OnSubmit();
      }
    }

    _OnSubmit = () => {
      const value = R.trim(this.props.newItemTitle);
      if (!R.isEmpty(value)) {
        this.props.newItemTitleSubmitted();
      }
    }

    onInputChange(event) {
      this.props.newItemTitleChanged({
        title: event.target.value
      });
    }

    render() {
      return (
        <div style={styles.container}>

          <h1 style={styles.title}>
            List Add
          </h1>

          <div style={styles.inputContainer}>

            {/* http://stackoverflow.com/questions/13224520/css3-new-style-flexbox-fails-to-stretch-textarea-in-chrome */}
            <div style={styles.textareaContainer}>
              <textarea
                style={this.props.error ? styles.textareaError : styles.textarea}
                autoFocus
                type="text"
                onAttached={node => {this.input = node;}}
                // disabled={this.props.isSaving}
                value={this.props.newItemTitle}
                onInput={event => this.onInputChange(event)}
                onKeyDown={this._OnTextKeyDown}
              />
            </div>

            <button
              style={styles.button}
              onClick={this._OnSubmit}
            >
              Send
            </button>
          </div>
          <div style={styles.error}>
            {this.props.error}
          </div>

          <Items {...this.props}/>

          <div style={styles.actionsContainer}>
            <button
              style={styles.actionsContainerButton}
              onClick={this.props.removeAllItemsClicked}
            >
              remove all
            </button>
          </div>

        </div>
      );
    }

  }
);
