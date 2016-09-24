function checkPermissionDenied({ input, state }) {
  if (input.error.match(/^.*permission_denied.*$/g)) {
    state.set('login.user.is_admin', false);
  } else {
    state.set('main.error_message', input.error);
  }
}

export default checkPermissionDenied;
