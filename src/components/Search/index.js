import React from 'react';
import { connect } from 'cerebral-view-react';
import Items from '../../components/ChatList/Items';
import styles from './styles';

export default connect({
    is_admin: 'login.user.is_admin',
    results: 'search.results',
  }, {
    inputSearchChanged: 'search.inputSearchChanged',
    searchClicked: 'search.searchClicked',
  },
  class Search extends React.Component {
    _onSearch = (event) => {
      event.preventDefault();
      this.props.searchClicked();
    };

    _OnKeyDown = (event) => {
      if (event.keyCode === 13) {
        this.props.searchClicked();
      }
    };

    render() {
      return (
        <div style={styles.container} className="container">

          <section className="title">
            Search
          </section>

          <div style={styles.inputContainer} id="inputContainer">
            <input
              id="my_input"
              type="text"
              style={styles.searchInput}
              ref={node => {
                this.inputNode = node;
              }}
              value={this.props.input_search}
              onChange={event => this.props.inputSearchChanged({ query: event.target.value })}
              onKeyDown={this._OnKeyDown}
            />
            <button
              style={styles.searchButton}
              onClick={this._onSearch}
            >
              Go!
            </button>
          </div>

          <div style={styles.resultsContainer} id="resultsContainer">
            <Items items={this.props.results} hideButtons={true}/>
          </div>
        </div>
      );
    }

  }
);
