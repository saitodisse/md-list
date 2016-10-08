import React from 'react';
import { connect } from 'cerebral-view-react';
import InputField from '../../InputField';
import LabelField from '../../LabelField/index';
import JobsTable from './JobsTable';
import BodyResultsTable from './BodyResultsTable/index';
import JsonExtractionsFieldsTable from './JsonExtractionsFieldsTable/index';
require('!style!css!./styles.css');

//noinspection JSUnusedLocalSymbols
export default connect({
    all_loaded: 'main.all_loaded',

    // Jobs
    jobs: 'jobs.job.list',
    job_selected: 'jobs.job.selected.*',

    // Body Results
    body_results: 'jobs.body_results.list',
    body_result_selected: 'jobs.body_results.selected.*',

    // Json extraction fields
    json_extraction_fields: 'jobs.json_extraction_fields.list',
    json_extraction_fields_Selected: 'jobs.json_extraction_fields.selected.*',

    // Json extraction fields
    json_results: 'jobs.json_results.list',
    json_results_Selected: 'jobs.json_results.selected.*',
  }, {
    inputJobNameChanged: 'jobs.inputJobNameChanged',
    inputInitialSpecStateChanged: 'jobs.inputInitialSpecStateChanged',
    inputUrlChanged: 'jobs.inputUrlChanged',

    createNewJobClicked: 'jobs.createNewJobClicked',
    runJobClicked: 'jobs.runJobClicked',
    extractJsonClicked: 'jobs.extractJsonClicked',

    input_name_changed: 'jobs.input_name_changed',
    input_selector_changed: 'jobs.input_selector_changed',
    input_data_type_changed: 'jobs.input_data_type_changed',
    input_js_type_changed: 'jobs.input_js_type_changed',

  },
  class Jobs extends React.Component {
    render() {
      if (!this.props.all_loaded) {
        return null;
      }

      return (
        <div id="jobs">
          {
            /**************************
             * Jobs
             **************************/
          }
          <section className="title">
            Jobs
          </section>

          <JobsTable obj_list={this.props.jobs}/>

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
              value={this.props.job_selected.id}
            />

            <InputField
              label="Job name"
              value={this.props.job_selected.job_name}
              onChange={event => this.props.inputJobNameChanged({ job_name: event.target.value })}
            />

            <InputField
              label="Initial _state"
              value={this.props.job_selected.initial_spec_state}
              onChange={event => this.props.inputInitialSpecStateChanged({ initial_spec_state: event.target.value })}
            />

            <InputField
              label="Initial URL"
              value={this.props.job_selected.url}
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


          {
            /**************************
             * Body Results
             **************************/
          }
          <section className="title">
            Body Results
          </section>

          <BodyResultsTable obj_list={this.props.body_results}/>

          <div className="bodyResultContainer">
            <pre>
              {this.props.body_result_selected.id && this.props.body_results[ this.props.body_result_selected.id ].body}
            </pre>
          </div>


          {
            /**************************
             * JSON Extractions Fields
             **************************/
          }
          <section className="title">
            JSON Extractions Fields
          </section>

          <JsonExtractionsFieldsTable obj_list={this.props.json_extraction_fields}/>

          <section className="inputsContainer">
            <LabelField
              label="id"
              value={this.props.json_extraction_fields_Selected.id}
            />

            <InputField
              label="Name"
              value={this.props.json_extraction_fields_Selected.name}
              onChange={event => this.props.input_name_changed({ value: event.target.value })}
            />

            <InputField
              label="CSS Selector"
              value={this.props.json_extraction_fields_Selected.selector}
              onChange={event => this.props.input_selector_changed({ value: event.target.value })}
            />

            <InputField
              label="Data Type"
              value={this.props.json_extraction_fields_Selected.data_type}
              onChange={event => this.props.input_data_type_changed({ value: event.target.value })}
            />

            <InputField
              label="JS Type"
              value={this.props.json_extraction_fields_Selected.js_type}
              onChange={event => this.props.input_js_type_changed({ value: event.target.value })}
            />
          </section>

          <section className="actionsButtonsContainer">
            <button
              className="actionButton"
              onClick={() => this.props.extractJsonClicked()}
            >
              Run Selected
            </button>
          </section>

          <div className="bodyResultContainer">
            <pre>
              {JSON.stringify(this.props.json_results, null, 2)}
            </pre>
          </div>
        </div>
      );
    }
  }
);