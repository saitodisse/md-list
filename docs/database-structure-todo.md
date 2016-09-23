# Firebase real time database structure

> based on: https://firebase.google.com/docs/database/security/user-security#section-revisiting-advanced-example

```js
items: {
  $CHANNEL_ID: {
    $ITEM_ID: {
      id: '$ITEM_ID',
      body: 'Message body',
      displayName: 'User name',
      photoURL: 'https://img.jpg',
      created_by: '$USER_ID'
      created_at: firebase.database.ServerValue.TIMESTAMP,
    },
  },
}

channels: {
  $CHANNEL_ID: {
    id: '$CHANNEL_ID',
    name: 'name',
    owner: '$USER_ID',
    is_private: '$USER_ID',
    created_at: firebase.database.ServerValue.TIMESTAMP,
  },
}

members: {
  $CHANNEL_ID: {
    $USER_ID: {
      user_id: "$USER_ID"
      displayName: 'User name',
    },
  },
}

users: {
  $USER_ID: {
    id: '$USER_ID',
    displayName: 'Julio Makdisse Saito',
    email: 'saitodisse@gmail.com',
    photoURL: 'https://img.jpg',
    providerId: 'facebook.com',
    created_at: firebase.database.ServerValue.TIMESTAMP,
    last_seen_at: firebase.database.ServerValue.TIMESTAMP,
  },
}

```
