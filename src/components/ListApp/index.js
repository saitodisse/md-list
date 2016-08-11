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
  newItemTitleChanged: 'listApp.newItemTitleChanged'
},
  class ListApp extends Component {
    componentDidUpdate(prevProps) {
      if (prevProps.isSaving && !this.props.isSaving) {
        this.input.focus();
      }
    }
    onFormSubmit(event) {
      event.preventDefault();
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
        <div>
          <h1 style={styles.header}>
            List Add
          </h1>
          <form
            style={styles.container}
            onSubmit={event => this.onFormSubmit(event)}
          >
            <input
              autoFocus
              type="text"
              style={this.props.error ? styles.inputError : styles.input}
              onAttached={node => {this.input = node;}}
              disabled={this.props.isSaving}
              value={this.props.newItemTitle}
              onInput={event => this.onInputChange(event)}
            />
            <div style={styles.error}>
              {this.props.error}
            </div>
          </form>

          <Items />

        </div>
      );
    }
  }
);
