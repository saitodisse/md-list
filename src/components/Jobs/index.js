import React from 'react';
import { connect } from 'cerebral-view-react';
import styles from './styles';

//noinspection JSUnusedLocalSymbols
export default connect({}, {},
  class Jobs extends React.Component {
    //noinspection JSMethodCanBeStatic
    render() {
      return (
        <div style={styles.container} className="container">
          <section className="title">
            Jobs
          </section>

          <div style={styles.inputContainer} id="inputContainer">
            <label style={styles.jobNameLabel}>
              Job name:
            </label>
            <input
              id="my_input"
              type="text"
              style={styles.jobNameInput}
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
              save
            </button>
          </div>

          <div style={styles.resultsContainer} id="resultsContainer">
            {/*<Items items={this.props.results} hideButtons={true}/>*/}
          </div>
        </div>
      );
    }

  }
);