import Inferno from 'inferno';
import Component from 'inferno-component';
import {connect} from 'cerebral-view-inferno';
import Items from '../Items';
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
          <h1 style={styles.header}>
            List Add
          </h1>

          <div style={styles.textContainer}>
            <textarea
              style={this.props.error ? styles.inputError : styles.input}
              autoFocus
              type="text"
              onAttached={node => {this.input = node;}}
              // disabled={this.props.isSaving}
              value={this.props.newItemTitle}
              onInput={event => this.onInputChange(event)}
              onKeyDown={this._OnTextKeyDown}
            />
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


          <Items />

        </div>
      );
    }

  }
);
