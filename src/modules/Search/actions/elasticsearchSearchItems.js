function elasticsearchSearchItems({ services, state, output }) {
  services.http.request({
    method: 'GET',
    url: `/items/_search?q=${state.get('search.query')}&size=50&from=0`,
  }).then(output.success)
    .catch(output.error);
}

elasticsearchSearchItems.async = true;
elasticsearchSearchItems.outputs = ['success', 'error'];

export default elasticsearchSearchItems;
