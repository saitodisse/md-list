// noinspection Eslint

const db = {
  configurations: {
    app: {
      only_admins_create_channels: true,
    },
  },

  items: {
    $CHANNEL_ID: {
      $ITEM_KEY: {
        item_id,
        user_id         // from user
      }
    }
  },

  channels: {
    $CHANNEL_ID: {
      id: '$CHANNEL_ID',
      name: 'name',
      owner: '$USER_ID',
      is_private: '$USER_ID',
      created_at: firebase.database.ServerValue.TIMESTAMP,
      users: {
        user_id_1: 'user_id_1',
        user_id_2: 'user_id_2',
        user_id_n: '...',
      }
    },
  },

};
