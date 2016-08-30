function listenSomeData({ services }) {
  services.firebase.onValue('some_data', 'login.dataReceived');
}

export default listenSomeData;
