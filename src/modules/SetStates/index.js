import { set } from 'cerebral/operators';

export default (controller) => module => {
  module.addSignals({
    logModelRequested: [ set('state:set_states.all_model', controller.logModel()) ]
  });
};