function elasticsearchPutData({ services, input, output }) {
  services.http.request({
    method: 'PUT',
    url: `/${input.path}/${input.key}`,
    body: input.data
  }).then(output.success)
    .catch(output.error);
}

elasticsearchPutData.async = true;
elasticsearchPutData.outputs = ['success', 'error'];

export default elasticsearchPutData;
