function notificationItemAdd({ input, services, state }) {
  const item = state.get(`chatList.items.${input.key}`);
  const last_login_at = state.get('login.last_login_at');

  // must be newer than last login date
  const is_message_new = item.created_at > last_login_at;
  /**/console.log({"item.created_at": item.created_at});/* -debug- */
  /**/console.log({"last_login_at": last_login_at});/* -debug- */
  /**/console.log({is_message_new});/* -debug- */
  if (!is_message_new) {
    return null;
  }

  const notif = services.notifications.sendNotification({
    title: item.displayName,
    body: `${item.body}`,
    icon_url: item.photoURL,
    close_in_seconds: 4,
  });

  return {notificationOnClick: notif.onclick};
}

export default notificationItemAdd;
