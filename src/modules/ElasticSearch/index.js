import elasticsearchCheckHelth from './chains/elasticsearchCheckHelth';

export default module => {
  module.addSignals({
    elasticsearchHelthRequested: elasticsearchCheckHelth,
  });
};
