export default (_options = {}) => module => {
  module.addServices({

    requestPermitionAsync() {
      return Notification.requestPermission();
    },

    sendNotification(text) {
      // Let's check if the browser supports notifications
      if (!('Notification' in window)) {
        console.log('This browser does not support desktop notification');
      }
      const notification = new Notification(text);
      /**/console.log({notification});/* -debug- */
      return notification;
    }

  });
};

