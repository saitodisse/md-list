const firebase = require('firebase');
const ref = firebase.database().ref('queue');

require('./multiply/multiply_by_10');
require('./multiply/print_number');
require('./get_if_odd/check_odd_number');
require('./get_if_odd/show_odd_number');

ref.child('specs').set({

  // Multiply by 10
  multiply_by_10: {
    start_state: 'spec_multiply_by_10',
    in_progress_state: 'multiply_by_10_in_progress',
    finished_state: 'multiply_by_10_finished',
    timeout: 10000
  },
  print_number: {
    start_state: 'multiply_by_10_finished',
    in_progress_state: 'print_number_in_progress',
    timeout: 10000,
  },

  // Odd Numbers
  check_odd_number: {
    start_state: 'spec_check_odd_number',
    in_progress_state: 'check_odd_number_in_progress',
    finished_state: 'check_odd_number_finished',
    timeout: 10000
  },
  show_odd_number: {
    start_state: 'check_odd_number_finished',
    in_progress_state: 'show_odd_number_in_progress',
    timeout: 10000
  },
});
