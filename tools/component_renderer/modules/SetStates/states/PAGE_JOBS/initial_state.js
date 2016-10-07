module.exports = {
  job: {
    list: {
      '-SOME_JOB_ID-1': {
        id: '-SOME_JOB_ID-1',
        job_name: 'Não Salvo - get posts',
        initial_spec_state: 'crawler_web_page',
        url: 'http://www.naosalvo.com.br/',
        created_at: (new Date()).getTime(),
      },
    },
    selected: {
      id: '',
      job_name: '',
      initial_spec_state: '',
      url: '',
    },
  },

  body_results: {
    list: {
      '-BODY_RESULT_ID-1': {
        id: '-BODY_RESULT_ID-1',
        body: require('./stub_html_body'),
        created_at: (new Date()).getTime(),
      },
    },
    selected: {
      id: '',
      body: '',
      created_at: '',
    },
  },

  json_extraction_fields: {
    list: {
      '-JSON_EXTRACTION_FIELD_RESULT_ID-1': {
        id: '-JSON_EXTRACTION_FIELD_RESULT_ID-1',
        name: 'Não Salvo - Extract Posts Links',
        selector: '.a',
        data_type: 'List',
        js_type: 'Array',
        created_at: (new Date()).getTime(),
      },
    },
    selected: {
      id: '',
      name: '',
      selector: '',
      data_type: '',
      js_type: '',
      created_at: '',
    },
  },

  // json_extractions: {
  //   '-JSON_EXTRACTIONS_ID-1': {
  //     id: '-SOME_ID-1',
  //     name: 'Não Salvo - Extract Posts Links',
  //     created_at: (new Date()).getTime(),
  //   },
  // },
};
