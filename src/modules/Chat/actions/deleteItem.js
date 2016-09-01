import firebase from 'firebase';

function deleteItem({ input }) {
  const {user_id, user_name, body} = input;

  const postData = {
    user_id,
    user_name,
    body,
  };

  // Get a key for a new Post.
  const newPostKey = firebase.database().ref().child('list').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates['/items/' + newPostKey] = postData;
  updates['/user-items/' + user_id + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}

export default deleteItem;
