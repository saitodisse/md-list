function notificationItemRemoved({ input, services, state }) {
  const item = state.get(`chatList.items.${input.key}`);
  const notif = services.notifications.sendNotification({
    title: item.displayName,
    body: `[deleted] ${item.body}`,
    icon_url: item.photoURL,
    close_in_seconds: 4,
  });

  return {notificationOnClick: notif.onclick};
}

export default notificationItemRemoved;
