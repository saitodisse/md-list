function notificationRequestPermition({ services, output }) {
  const DEFAULT = 'default';
  const GRANTED = 'granted';
  const DENIED = 'denied';

  services.notifications.requestPermitionAsync()
    .then((result) => {
      switch (result) {
      case DEFAULT:
        output.default({notification_result: result});
        break;
      case GRANTED:
        output.granted({notification_result: result});
        break;
      case DENIED:
        output.denied({notification_result: result});
        break;
      default:
        break;
      }
    })
    .catch(output.error);
}
notificationRequestPermition.async = true;

export default notificationRequestPermition;
