import React from 'react';
import { connect } from 'cerebral-view-react';
require('!style!css!./styles.css');

export default connect({}, {},
  class SetStates extends React.Component {
    render() {
      return (
        <div id="set_states">
          <section className="title">
            Set Initial States
          </section>
        </div>
      );
    }
  }
);