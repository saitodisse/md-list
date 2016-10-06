import firebase from 'firebase';

function getMoreData({ output, state }) {
  firebase.database().ref('items')
    .orderByKey()
    .limitToLast(state.get('chatList.limitToLast'))
    // .limitToLast(3)
    .endAt(state.get('chatList.first_item_key'))
    .once('value')
    .then((result) => {
      return { value: result.val() };
    })
    .then(output.success)
    .catch(output.error);
}

getMoreData.async = true;
getMoreData.outputs = [ 'success', 'error' ];

export default getMoreData;
