import _ from 'lodash/fp';

function getResults({ input, state }) {
  const hits = input.result.hits.hits;
  const hitsObj = _.reduce((prev, curr) => {
    const item = curr._source;
    prev[ item.id ] = item;
    return prev;
  }, {}, hits);

  state.set('search.results', hitsObj);
}

export default getResults;
