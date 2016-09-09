function notificationItemAdd({ input, services, state }) {
  const item = state.get(`chatList.items.${input.key}`);
  const last_login_at = state.get('login.last_login_at');

  // must be newer than last login date
  const is_message_new = item.created_at > last_login_at;
  if (!is_message_new) {
    return null;
  }

  // must be from other user
  const me_user_id = state.get('login.user.uid');
  const is_my_item = item.user_id === me_user_id;
  if (is_my_item) {
    return null;
  }

  const notif = services.notifications.sendNotification({
    title: item.displayName,
    body: `${item.body}`,
    icon_url: item.photoURL,
    close_in_seconds: 4,
  });

  notif.onclick = () => {
    notif.close();
  };

  return {notificationOnClick: notif.onclick};
}

export default notificationItemAdd;
