import React from 'react';
import {connect} from 'cerebral-view-react';
import styles from './styles';
import SearchResultItem from './SearchResultItem';
import _ from 'lodash/fp';

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
    }

    _renderResults = () => {
      return _.map((item) => (
        <SearchResultItem key={item.id} data={item}/>
      ), this.props.results);
    }

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
              ref={node => {this.inputNode = node;}}
              value={this.props.input_search}
              onChange={event => this.props.inputSearchChanged({query: event.target.value})}
            />
            <button
              style={styles.searchButton}
              onClick={this._onSearch}
            >
            Go!
            </button>
          </div>

          <div style={styles.resultsContainer} id="resultsContainer">
            {this._renderResults()}
          </div>


        </div>
      );
    }

  }
);
