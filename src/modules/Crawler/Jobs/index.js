import { copy } from 'cerebral/operators';

export default module => {
  module.addSignals({
    inputJobNameChanged: {
      chain: [ copy('input:job_name', 'state:jobs.job_name') ],
      immediate: true
    },
    inputInitialSpecStateChanged: {
      chain: [ copy('input:initial_spec_state', 'state:jobs.initial_spec_state') ],
      immediate: true
    },
    inputUrlChanged: {
      chain: [ copy('input:url', 'state:jobs.url') ],
      immediate: true
    },
  });
};
