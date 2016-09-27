import firebase from 'firebase';

function addMemberToFirebase({ input, output }) {
  const updates = {};
  updates[`members/${input.user_id}`] = input.user_id;

  firebase.database().ref().update(updates)
    .then(output.success)
    .catch(output.error);
}
addMemberToFirebase.async = true;
addMemberToFirebase.outputs = ['success', 'error'];

export default addMemberToFirebase;
