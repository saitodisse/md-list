import { set } from 'cerebral/operators';
import { PAGE_JOBS } from '../../constants/index';

export default (controller) => module => {
  const jobs = {};
  jobs[ `${PAGE_JOBS}_init_state` ] = [
    set('state:jobs', {
      foo: 'bar',
    }),
  ];

  module.addSignals({
    ...jobs
  });
};