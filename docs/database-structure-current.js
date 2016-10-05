// noinspection Eslint

const db = {
  configurations: {
    app: {
      edit_other_users_items: true,
      restricted_access_to_members: false
    },

    user: {
      desktop: {
        font_size: 16,
        show_delete_button: true,
        show_edit_button: true,
      },
      mobile: {
        font_size: 20,
        show_delete_button: true,
        show_edit_button: true,
      },
    },
  },

  items: {
    $ITEM_KEY: {
      id,
      body,
      created_at,
      displayName,    // from user
      photoURL,       // from user
      user_id         // from user
    }
  },

  members: {
    xi4cZkqfpiMyq1eaX2R8KW6U9n73: "xi4cZkqfpiMyq1eaX2R8KW6U9n73"
  },

  roles: {
    admins: {
      xi4cZkqfpiMyq1eaX2R8KW6U9n73: "xi4cZkqfpiMyq1eaX2R8KW6U9n73"
    }
  },

  users: {
    displayName,
    photoURL,
    updated_at,
    configurations: {}
  },

};
