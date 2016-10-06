import React from 'react';
import { connect } from 'cerebral-view-react';
import InputField from '../../InputField';
import LabelField from '../../LabelField/index';
import JobsTable from './JobsTable';
import BodyResultsTable from './BodyResultsTable/index';
require('!style!css!./styles.css');

//noinspection JSUnusedLocalSymbols
export default connect({
    job_name: 'jobs.job_name',
    initial_spec_state: 'jobs.initial_spec_state',
    url: 'jobs.url',
    jobs_list: 'jobs.jobs_list',
    body_results: 'jobs.body_results',
    selected_job_id: 'jobs.job_id',
    all_loaded: 'main.all_loaded',
  }, {
    inputJobNameChanged: 'jobs.inputJobNameChanged',
    inputInitialSpecStateChanged: 'jobs.inputInitialSpecStateChanged',
    inputUrlChanged: 'jobs.inputUrlChanged',
    createNewJobClicked: 'jobs.createNewJobClicked',
    runJobClicked: 'jobs.runJobClicked',
  },
  class Jobs extends React.Component {
    render() {
      if (!this.props.all_loaded) {
        return null;
      }

      return (
        <div id="jobs">
          <section className="title">
            Jobs
          </section>

          <JobsTable obj_list={this.props.jobs_list} />

          <section className="actionsButtonsContainer">
            <button
              className="actionButton"
              onClick={() => this.props.createNewJobClicked()}
            >
              Create new Job
            </button>
          </section>

          <section className="inputsContainer">
            <LabelField
              label="id"
              value={this.props.selected_job_id}
            />

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
              onClick={() => this.props.runJobClicked()}
            >
              Run
            </button>
          </section>

          <BodyResultsTable obj_list={this.props.body_results} />

          <div className="resultsContainer">
            {/*<Items items={this.props.results} hideButtons={true}/>*/}
          </div>
        </div>
      );
    }
  }
);