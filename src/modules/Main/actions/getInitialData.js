import firebase from 'firebase';

function getInitialData({ output, state }) {
  firebase.database().ref('items')
    .orderByKey()
    .limitToLast(state.get('chatList.limitToLast'))
    // .limitToLast(3)
    // .endAt('-KSnz14NVJDxGCmShTce')
    .once('value')
    .then((result) => {
      return { value: result.val() };
    })
    .then(output.success)
    .catch(output.error);
}

getInitialData.async = true;
getInitialData.outputs = [ 'success', 'error' ];

export default getInitialData;
