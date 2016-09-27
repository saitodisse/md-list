{
  "rules": {
    // cannot list
    ".read": "false",
    "configurations": {
      ".read": "
        auth != null
        && (
            (
                 root.child('members/' + auth.uid).exists()
              && root.child('configurations/app/restricted_access_to_members').val() === true
            )
            || root.child('configurations/app/restricted_access_to_members').val() === false
            || !root.child('configurations/app/restricted_access_to_members').exists()
         )
      ",
      "$CONFIG_KEY": {
        ".write": "
             // is authenticated
             auth != null
             && (
                 (
                     root.child('members/' + auth.uid).exists()
                  && root.child('configurations/app/restricted_access_to_members').val() === true
                )
                 || root.child('configurations/app/restricted_access_to_members').val() === false
                 || !root.child('configurations/app/restricted_access_to_members').exists()
             )
             // cannot delete
          && newData.exists()
        ",

        ".validate": "
          // must have admin role
          root.child('admins/' + auth.uid).exists()
        ",
      }
    },
    "roles": {
      "$USER_KEY": {
        ".read": "
             auth != null
             && (
                 (
                     root.child('members/' + auth.uid).exists()
                  && root.child('configurations/app/restricted_access_to_members').val() === true
                )
                 || root.child('configurations/app/restricted_access_to_members').val() === false
                 || !root.child('configurations/app/restricted_access_to_members').exists()
             )
          && auth.uid != $USER_KEY
          && root.child('admins/' + auth.uid).exists()
        ",
      }
    },
    "items": {
      // is authenticated
      ".read": "
        auth != null
        && (
            (
                 root.child('members/' + auth.uid).exists()
              && root.child('configurations/app/restricted_access_to_members').val() === true
            )
            || root.child('configurations/app/restricted_access_to_members').val() === false
            || !root.child('configurations/app/restricted_access_to_members').exists()
         )
      ",
      ".indexOn": ["created_at"],
      "$ITEM_KEY": {
        ".write": "
             // is authenticated
             auth != null
             && (
                 (
                     root.child('members/' + auth.uid).exists()
                  && root.child('configurations/app/restricted_access_to_members').val() === true
                )
                 || root.child('configurations/app/restricted_access_to_members').val() === false
                 || !root.child('configurations/app/restricted_access_to_members').exists()
             )
          && (
               // insert/update: must have this childs
               newData.hasChildren([
                 'id',
                 'user_id',
                 'displayName',
                 'photoURL',
                 'body',
               ])
            || (
                   // can delete
                   !newData.exists()
                   // only his item
                &&  (    root.child('items/'+$ITEM_KEY).child('user_id').val() === auth.uid
                      || root.child('configurations/app/edit_other_users_items').val() === true
                    )
              )
          )
        ",

        ".validate": "
           // update: only his items
              newData.child('user_id').val() === auth.uid
           || root.child('configurations/app/edit_other_users_items').val() === true
        ",

        "id": { ".validate": "
             // has value
             newData.isString()
          && newData.val().length > 0
             // check id
//           && $ITEM_KEY === newData.val()
        "},

        "user_id": { ".validate": "
             // has value
             newData.isString()
          && newData.val().length > 0

          && (
                  // new item
                  !data.exists() && newData.val() === auth.uid
                  // existing item
               || data.exists() &&
                  (    data.val() === auth.uid
                    || root.child('configurations/app/edit_other_users_items').val() === true
                  )
             )
        "},

        "displayName": { ".validate": "
             // has value
             newData.isString()
          && newData.val().length > 0
        "},

        "photoURL": { ".validate": "
             // has value
             newData.isString()
          && newData.val().length > 0
        "},

        "body": { ".validate": "
             // has value
             newData.isString()
          && newData.val().length > 0
        "},

        "created_at": { ".validate": "true" },
        "updated_at": { ".validate": "true" },

        // no other field
        "$other": { ".validate": false },
      }
    },
    "admins": {
      // only list if is admin
      ".read": "root.child('admins/' + auth.uid).exists()",
      ".write": "root.child('admins/' + auth.uid).exists()",
      ".indexOn": ["created_at"],
    },
    "members": {
      // only list if is admin
      ".read": "root.child('admins/' + auth.uid).exists()",
      ".write": "root.child('admins/' + auth.uid).exists()",
      ".indexOn": ["created_at"],
    },
    "users": {
      // only list if is admin
      ".read": "root.child('admins/' + auth.uid).exists()",
      ".write": "root.child('admins/' + auth.uid).exists()",
      ".indexOn": ["updated_at"],
      "$USER_ID": {
        ".read": "
             // must be logged in
             auth != null
             && (
                 (
                     root.child('members/' + auth.uid).exists()
                  && root.child('configurations/app/restricted_access_to_members').val() === true
                )
                 || root.child('configurations/app/restricted_access_to_members').val() === false
                 || !root.child('configurations/app/restricted_access_to_members').exists()
             )
             // must be his own user key
          && (  auth.uid === $USER_ID
             || root.child('admins/' + auth.uid).exists())
        ",
        ".write": "
             // is authenticated
             auth != null
             && (
                 (
                     root.child('members/' + auth.uid).exists()
                  && root.child('configurations/app/restricted_access_to_members').val() === true
                )
                 || root.child('configurations/app/restricted_access_to_members').val() === false
                 || !root.child('configurations/app/restricted_access_to_members').exists()
             )
          && (
               // insert/update: must have this childs
               newData.hasChildren([
                 'user_id',
                 'displayName',
                 'photoURL',
                 'updated_at'
               ])
            || (
                   // can delete
                   !newData.exists()
                   // only his item
                // && root.child('users/'+$USER_ID).child('user_id').val() === auth.uid
              )
          )
        ",

        ".validate": "
              // update: only his items
              newData.child('user_id').val() === auth.uid
              // must be his own key
           && newData.child('user_id').val() === $USER_ID
        ",

        "user_id": { ".validate": "
             // has value
             newData.isString()
          && newData.val().length > 0

          && (
                  // new item
                  (
                      !data.exists()
                   && newData.val() === auth.uid
                   && newData.val() === $USER_ID
                  )
                  // existing item
               || (
                       data.exists()
                    && data.val() === auth.uid
                    && data.val() === $USER_ID
                  )
             )
        "},

        "displayName": { ".validate": "
             // has value
             newData.isString()
          && newData.val().length > 0
        "},

        "photoURL": { ".validate": "
             // has value
             newData.isString()
          && newData.val().length > 0
        "},

        "updated_at": { ".validate": "true" },

        "configurations": {
          ".read": "auth.uid != $USER_ID",
        },

        // no other field
        "$other": { ".validate": false },
      }
    },
  }
}

