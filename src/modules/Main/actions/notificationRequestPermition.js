function notificationRequestPermition({ services, output }) {
  const DEFAULT = 'default';
  const GRANTED = 'granted';
  const DENIED = 'denied';

  const requestPermitionAsync = services.notifications.requestPermitionAsync();

  if ( typeof requestPermitionAsync === 'undefined'
    || typeof requestPermitionAsync.then !== 'function') {
    return output.error();
  }

  return requestPermitionAsync
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
