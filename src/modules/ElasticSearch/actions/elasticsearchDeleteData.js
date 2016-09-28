function elasticsearchDeleteData({ services, input, output }) {
  services.http.request({
    method: 'DELETE',
    url: `/${input.path}/${input.key}`
  }).then(output.success)
    .catch(output.error);
}

elasticsearchDeleteData.async = true;
elasticsearchDeleteData.outputs = ['success', 'error'];

export default elasticsearchDeleteData;
