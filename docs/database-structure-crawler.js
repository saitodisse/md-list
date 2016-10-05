// noinspection Eslint

const db = {
  crawlers: {
    $USER_ID: {
      crawler_id,
      name,
      initial_spec_state, // firebase queue
      suggested_url,
      created_at,
      displayName, // from user
      photoURL,    // from user
      user_id,     // from user
    },
  },

  //TODO
  crawlers_executions: {
    $CRAWLER_EXECUTION_ID: {

    },
    $USER_ID: {
      created_at,
      displayName, // from user
      photoURL,    // from user
      user_id,     // from user
      executions: {
        $CRAWLER_JOB_ID: {
          name,
          initial_spec_state, // firebase queue
          suggested_url,
          created_at,
          body_results: {
            $BODY_RESULT_ID: {
              body_result_id,
              crawler_job_id,
              created_at,
            },
          },
        }
      }
    },
  },

  body_results: {
    $BODY_RESULT_ID: {
      body_result_id,
      crawler_job_id,
    }
  },
};
