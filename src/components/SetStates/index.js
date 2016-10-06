import React from 'react';
import { connect } from 'cerebral-view-react';
import InputField from '../InputField';
require('!style!css!./styles.css');

//noinspection JSUnusedLocalSymbols
export default connect({
    all_model: 'set_states.all_model',
  }, {
    logModelRequested: 'set_states.logModelRequested',
  },
  class SetStates extends React.Component {
    componentDidMount() {
      this.props.logModelRequested()
    }
    //noinspection JSMethodCanBeStatic
    render() {
      return (
        <div id="set_states">
          <section className="title">
            Set States
          </section>

          <div className="resultsContainer">
            <pre>
              {JSON.stringify(this.props.all_model, null, 2)}
            </pre>
          </div>
        </div>
      );
    }
  }
);