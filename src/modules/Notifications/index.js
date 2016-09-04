export default (_options = {}) => module => {
  module.addServices({
    requestPermitionAsync() {
      return Notification.requestPermission();
    },
  });
};

