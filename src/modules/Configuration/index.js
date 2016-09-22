import getConfigurations from './chains/getConfigurations';

export default module => {
  module.addState({
    data: null,
  });

  module.addSignals({
    pageLoaded: getConfigurations,
  });
};
