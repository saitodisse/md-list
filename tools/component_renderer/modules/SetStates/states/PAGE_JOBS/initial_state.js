module.exports = {
  job: {
    list: {
      '_SOME_JOB_ID_1': {
        id: '_SOME_JOB_ID_1',
        job_name: 'Não Salvo _ get posts',
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
      '_BODY_RESULT_ID_1': {
        id: '_BODY_RESULT_ID_1',
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
      '_JSON_EXTRACTION_FIELDS_ID_1': {
        id: '_JSON_EXTRACTION_FIELDS_ID_1',
        name: 'Não Salvo _ Extract Posts Links',
        selector: '#posts h1',
        data_type: 'List',
        // js_type: 'Array',
        created_at: (new Date()).getTime(),
        converters: {
          _JSON_CONVERTERS_1: {
            id: '_JSON_CONVERTERS_1',
            property: 'innerText',
            name: 'title',
            type: 'string',
            merge_path: 'posts',
            key: [ 'parentElement', 'href' ],
            created_at: (new Date()).getTime(),
          },
          _JSON_CONVERTERS_2: {
            id: '_JSON_CONVERTERS_2',
            property: 'parentElement.href',
            name: 'href',
            type: 'string',
            merge_path: 'posts',
            key: [ 'parentElement', 'href' ],
            created_at: (new Date()).getTime(),
          },
        },
        '_JSON_EXTRACTION_FIELDS_ID_2': {
          id: '_JSON_EXTRACTION_FIELDS_ID_2',
          name: 'Não Salvo _ .month-and-year-post',
          selector: '.month-and-year-post',
          data_type: 'List',
          js_type: 'Array',
          created_at: (new Date()).getTime(),
          converters: {
            _JSON_CONVERTERS_1: {
              id: '_JSON_CONVERTERS_1',
              property: 'innerText',
              name: 'month-and-year',
              type: 'string',
              merge_path: 'posts',
              key: [ 'parentElement', 'parentElement', { querySelector: '[href]' }, 'href' ],
              created_at: (new Date()).getTime(),
            },
          },
        },
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

  json_results: {
    list: {
      '_JSON_RESULTS_ID_1': {
        id: '_JSON_RESULTS_ID_1',
        value: '',
        created_at: (new Date()).getTime(),
      },
    },
    selected: {
      id: '',
      value: '',
      created_at: '',
    },
  },
};
