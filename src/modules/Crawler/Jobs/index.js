import { copy } from 'cerebral/operators';

export default module => {
  module.addSignals({
    inputSearchChanged: {
      chain: [ copy('input:query', 'state:search.query') ],
      immediate: true
    },
  });
};
