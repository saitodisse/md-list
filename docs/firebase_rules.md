# Firebase Rules

- https://console.firebase.google.com/project/md-list-43a87/database/rules

```java
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
               newData.hasChildren(['id', 'uid', 'displayName', 'photoURL', 'body'])
            || (
                   // can delete
                   !newData.exists()
                   // only his item
                && root.child('items/'+$ITEM_KEY).child('uid').val() === auth.uid
              )
          )
        ",

        ".validate": "
           // update: only his items
           newData.child('uid').val() === auth.uid
        ",

        "id": { ".validate": "
             // has value
             newData.isString()
          && newData.val().length > 0
             // check id
          && $ITEM_KEY === newData.val()
        "},

        "uid": { ".validate": "
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

        // no other field
        "$other": { ".validate": false },
      }
    },
  }
}
```
