import React from 'react';
import { connect } from 'cerebral-view-react';
import InputField from '../InputField';
require('!style!css!./styles.css');

//noinspection JSUnusedLocalSymbols
export default connect({
    job_name: 'jobs.job_name',
    initial_spec_state: 'jobs.initial_spec_state',
  }, {
    inputJobNameChanged: 'jobs.inputJobNameChanged',
    inputInitialSpecStateChanged: 'jobs.inputInitialSpecStateChanged',
    inputUrlChanged: 'jobs.inputUrlChanged',
  },
  class Jobs extends React.Component {
    //noinspection JSMethodCanBeStatic
    render() {
      return (
        <div id="jobs">
          <section className="title">
            Jobs
          </section>

          <section className="tableListContainer">
            <table className="tableList">
              <thead>
              <tr>
                <th>id</th>
                <th>initial_state</th>
                <th>url</th>
                <th>user</th>
                <th>created_at</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>id</td>
                <td>initial_state</td>
                <td>url</td>
                <td>user</td>
                <td>created_at</td>
              </tr>
              <tr>
                <td>id</td>
                <td>initial_state</td>
                <td>url</td>
                <td>user</td>
                <td>created_at</td>
              </tr>
              <tr>
                <td>id</td>
                <td>initial_state</td>
                <td>url</td>
                <td>user</td>
                <td>created_at</td>
              </tr>
              </tbody>
            </table>
          </section>


          <section className="actionsButtonsContainer">
            <button
              className="actionButton"
              onClick={() => {
              }}
            >
              Create new Job
            </button>
          </section>

          <section className="inputsContainer">
            <InputField
              label="Job name"
              value={this.props.job_name}
              onChange={event => this.props.inputJobNameChanged({ job_name: event.target.value })}
            />

            <InputField
              label="Initial spec state (firebase queue)"
              value={this.props.initial_spec_state}
              onChange={event => this.props.inputInitialSpecStateChanged({ initial_spec_state: event.target.value })}
            />

            <InputField
              label="Initial URL"
              value={this.props.url}
              onChange={event => this.props.inputUrlChanged({ url: event.target.value })}
            />
          </section>

          <section className="actionsButtonsContainer">
            <button
              className="actionButton"
              onClick={() => {
              }}
            >
              Save
            </button>
            <button
              className="actionButton"
              onClick={() => {
              }}
            >
              Run
            </button>
          </section>


          <div className="resultsContainer">
            {/*<Items items={this.props.results} hideButtons={true}/>*/}
          </div>
        </div>
      );
    }
  }
);