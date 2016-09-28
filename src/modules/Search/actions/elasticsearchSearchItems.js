function elasticsearchSearchItems({ services, state, output }) {
  services.http.request({
    method: 'GET',
    url: `/chatlist/items/_search?q=${state.get('search.query')}`,
  }).then(output.success)
    .catch(output.error);
}

elasticsearchSearchItems.async = true;
elasticsearchSearchItems.outputs = ['success', 'error'];

export default elasticsearchSearchItems;
