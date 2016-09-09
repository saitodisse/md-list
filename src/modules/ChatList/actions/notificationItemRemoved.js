function notificationItemRemoved({ input, services, state }) {
  const item = state.get(`chatList.items.${input.key}`);

  // must be from other user
  const me_user_id = state.get('login.user.uid');
  const is_my_item = item.user_id === me_user_id;
  if (is_my_item) {
    return null;
  }

  const notif = services.notifications.sendNotification({
    title: item.displayName,
    body: `[deleted] ${item.body}`,
    icon_url: item.photoURL,
    close_in_seconds: 4,
  });

  notif.onclick = () => {
    notif.close();
  };

  return {notificationOnClick: notif.onclick};
}

export default notificationItemRemoved;
