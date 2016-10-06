import { set } from 'cerebral/operators';
import { PAGE_JOBS } from '../../constants/index';

export default (controller) => module => {
  const jobs = {};
  jobs[ `${PAGE_JOBS}_init_state` ] = [
    set('state:jobs', {
      job_name: 'job_name',
      initial_spec_state: 'initial_spec_state',
      url: 'url',
    }),
    set('state:main.all_loaded', true),
  ];

  module.addSignals({
    ...jobs
  });
};