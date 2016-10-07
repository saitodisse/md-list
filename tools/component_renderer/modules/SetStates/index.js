import { set } from 'cerebral/operators';
import { PAGE_JOBS } from '../../../../src/constants';

export default (controller) => module => {
  const jobs = {};
  jobs[ `${PAGE_JOBS}_init_state` ] = [
    set('state:jobs', require(`./states/${PAGE_JOBS}/initial_state`)),
  ];

  module.addSignals({
    ...jobs,
    page_loaded: [
      set('state:login.user.is_admin', true),
      set('state:main.all_loaded', true),
    ],
  });
};