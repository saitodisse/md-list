import { set } from 'cerebral/operators';
import { PAGE_JOBS } from '../../../../src/constants';

export default (controller) => module => {
  const jobs = {};
  jobs[ `${PAGE_JOBS}_init_state` ] = [
    set('state:jobs', {
      job_name: 'job_name',
      initial_spec_state: 'initial_spec_state',
      url: 'url',
      jobs_list: {
        '-SOME_ID-1': {
          job_id: '-SOME_ID-1',
          job_name: 'job_name 1',
          initial_spec_state: 'initial_spec_state 1',
          url: 'url 1',
          created_at: (new Date()).getTime(),
        },
        '-SOME_ID-2': {
          job_id: '-SOME_ID-2',
          job_name: 'job_name 2',
          initial_spec_state: 'initial_spec_state 2',
          url: 'url 2',
          created_at: (new Date()).getTime(),
        },
        '-SOME_ID-3': {
          job_id: '-SOME_ID-3',
          job_name: 'job_name 3',
          initial_spec_state: 'initial_spec_state 3',
          url: 'url 3',
          created_at: (new Date()).getTime(),
        },
      },
      body_results: {
        '-BODY_RESULT_ID-1': {
          body_result_id: '-BODY_RESULT_ID-1',
          // job_name: 'job_name 1',
          // initial_spec_state: 'initial_spec_state 1',
          // url: 'url 1',
          body: 'bla, bla, bla, bla, bla, bla, bla',
          created_at: (new Date()).getTime(),
        },
      },
    }),
  ];

  module.addSignals({
    ...jobs,
    page_loaded: [
      set('state:login.user.is_admin', true),
      set('state:main.all_loaded', true),

    ],
  });
};