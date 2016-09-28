import elasticsearchCheckHelth from './chains/elasticsearchCheckHelth';
import setSearchQuery from './chains/setSearchQuery';
import elasticsearchQueryItems from './chains/elasticsearchQueryItems';

export default module => {
  module.addSignals({
    elasticsearchHelthRequested: elasticsearchCheckHelth,
    inputSearchChanged: {
      chain: setSearchQuery,
      immediate: true
    },
    searchClicked: elasticsearchQueryItems,
  });
};
