{
  "rules": {
    "items": {
      // is authenticated
      ".read": "auth != null",
      "$ITEM_KEY": {
        ".write": "
             // is authenticated
             auth != null
          && (
               // insert/update: must have this childs
               newData.hasChildren([
                 'id',
                 'user_id',
                 'displayName',
                 'photoURL',
                 'body',
                 'created_at'
               ])
            || (
                   // can delete
                   !newData.exists()
                   // only his item
                && root.child('items/'+$ITEM_KEY).child('user_id').val() === auth.uid
              )
          )
        ",

        ".validate": "
           // update: only his items
           newData.child('user_id').val() === auth.uid
        ",

        "id": { ".validate": "
             // has value
             newData.isString()
          && newData.val().length > 0
             // check id
          && $ITEM_KEY === newData.val()
        "},

        "user_id": { ".validate": "
             // has value
             newData.isString()
          && newData.val().length > 0

          && (
                  // new item
                  !data.exists() && newData.val() === auth.uid
                  // existing item
               ||  data.exists() && data.val() === auth.uid
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

        // no other field
        "$other": { ".validate": false },
      }
    },
    "users": {
      // is authenticated
      ".read": "auth != null",
      "$USER_ID": {
        ".write": "
             // is authenticated
             auth != null
          && (
               // insert/update: must have this childs
               newData.hasChildren([
                 'user_id',
                 'displayName',
                 'photoURL',
                 'created_at'
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

        "created_at": { ".validate": "true" },

        // no other field
        "$other": { ".validate": false },
      }
    },
  }
}

