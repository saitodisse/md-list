import {set, copy, filter} from 'cerebral/operators';
import setFirebaseData from '../actions/setFirebaseData.js';
import saveInitialConfigurations from '../actions/saveInitialConfigurations.js';

const createInitialConfigurations = [
  set('state:main.is_loading', true),

  // only admin have this permission
  ...filter('state:login.user.is_admin', true, [
    setFirebaseData('/configurations/app/edit_other_users_items', false), { success: [], error: [copy('input:code', 'state:main.error')]},
    setFirebaseData('/configurations/app/restricted_access_to_members', false), { success: [], error: [copy('input:code', 'state:main.error')]},
    setFirebaseData('/configurations/user/desktop/font_size', 16), { success: [], error: [copy('input:code', 'state:main.error')]},
    setFirebaseData('/configurations/user/desktop/show_delete_button', true), { success: [], error: [copy('input:code', 'state:main.error')]},
    setFirebaseData('/configurations/user/desktop/show_edit_button', true), { success: [], error: [copy('input:code', 'state:main.error')]},
    setFirebaseData('/configurations/user/mobile/font_size', 18), { success: [], error: [copy('input:code', 'state:main.error')]},
    setFirebaseData('/configurations/user/mobile/show_delete_button', true), { success: [], error: [copy('input:code', 'state:main.error')]},
    setFirebaseData('/configurations/user/mobile/show_edit_button', true), { success: [], error: [copy('input:code', 'state:main.error')]},
  ]),

  saveInitialConfigurations, {
    success: [],
    error: [
      copy('input:message', 'state:main.error')
    ]
  },

  set('state:main.is_loading', false),
];

export default createInitialConfigurations;
