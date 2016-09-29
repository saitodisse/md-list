import firebase from 'firebase';

function getInitialData({ output }) {
  firebase.database().ref('items').limitToLast(10).once('value')
  .then((result) => {
    return {value: result.val()};
  })
  .then(output.success)
  .catch(output.error);
}

getInitialData.async = true;
getInitialData.outputs = ['success', 'error'];

export default getInitialData;
