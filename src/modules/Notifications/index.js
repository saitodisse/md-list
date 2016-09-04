export default (_options = {}) => module => {
  module.addServices({

    requestPermitionAsync() {
      return Notification.requestPermission();
    },

    sendNotification({title, body, icon_url, close_in_seconds}) {
      // Let's check if the browser supports notifications
      if (!('Notification' in window)) {
        console.log('This browser does not support desktop notification');
        return null;
      }
      const options = {
        body: body,
        icon: icon_url
      };
      const notification = new Notification(title, options);

      if (close_in_seconds) {
        setTimeout(() => notification.close(), close_in_seconds * 1000);
      }

      return notification;
    }

  });
};

