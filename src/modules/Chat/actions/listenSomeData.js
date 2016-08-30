function listenSomeData({ services }) {
  services.firebase.onValue('some_data', 'chat.dataReceived');
}

export default listenSomeData;
