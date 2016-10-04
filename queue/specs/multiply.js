module.exports = function multiply (ref) {
  // create spec
  ref.child('specs').set({
    task_1: {
      in_progress_state: 'task_1_in_progress',
      finished_state: 'task_1_finished',
      timeout: 10000
    },
    task_2: {
      start_state: 'task_1_finished',
      in_progress_state: 'task_2_in_progress',
      finished_state: null,
      timeout: 10000
    },
  });

  // start tasks
  require('./tasks/task_1')(ref);
  require('./tasks/task_2')(ref);
};

