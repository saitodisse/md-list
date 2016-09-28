function elasticsearchGetHelth({ services, output }) {
  services.http.request({
    method: 'GET',
    url: '/_cat/health',
  }).then(output.success)
    .catch(output.error);
}

elasticsearchGetHelth.async = true;
elasticsearchGetHelth.outputs = ['success', 'error'];

export default elasticsearchGetHelth;
