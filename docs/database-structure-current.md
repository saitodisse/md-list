# Firebase real time database structure

> based on: https://firebase.google.com/docs/database/security/user-security#section-revisiting-advanced-example

```js
configurations: {

  app: {
    edit_other_users_items: true
    restricted_access_to_members: false
  }

  user: {
    desktop: {
      font_size: 16,
      show_delete_button: true,
      show_edit_button: true,
    }
    mobile: {
      font_size: 20,
      show_delete_button: true,
      show_edit_button: true,
    }
  }

}

items: {
  $ITEM_KEY: {
    body:        "1",
    created_at:  1474521322447,
    displayName: "Julio Makdisse Saito",
    id:          "-KSFJSBRMFgXnZqqjCQX",
    photoURL:    "https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100...",
    user_id:     "xi4cZkqfpiMyq1eaX2R8KW6U9n73",
  }
}

members: {
 xi4cZkqfpiMyq1eaX2R8KW6U9n73: "xi4cZkqfpiMyq1eaX2R8KW6U9n73"
}

roles: {
  admins: {
    xi4cZkqfpiMyq1eaX2R8KW6U9n73: "xi4cZkqfpiMyq1eaX2R8KW6U9n73"
  }
}

users: {
  sxhvJIToTfUMeol6o0PEyy2aAFt1
    displayName: "Karen Neoral"
    photoURL: "https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100..."
    updated_at: 1474344564965
    user_id: "sxhvJIToTfUMeol6o0PEyy2aAFt1"
      configurations: {
        ...
      }
}
```
