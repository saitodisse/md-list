function elasticSearchInit({ services, output }) {
  services.elasticsearch.init();
  services.elasticsearch.ping()
    .then(output.success)
    .catch(output.error);
}

elasticSearchInit.async = true;
elasticSearchInit.outputs = ['error', 'success'];

export default elasticSearchInit;
