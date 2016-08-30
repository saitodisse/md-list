# cerebral-website-tutorial

The tutorial app for the Cerebral website

# run

```sh
# # json server
# #  - http://localhost:3001/
$ mv server/db-example.json server/db.json
$ npm run server

# # cerebral app
# #  - http://localhost:3000/
$ npm run client
```

# TODO

- [x] [styles] make items to align to the right
- [x] [signals] allow to enter new value even before server response
- [x] [list] transform data in an object: http://www.cerebraljs.com/documentation/storing_server_data
- [x] [isNew] update $IsNew by id, not by index
- [x] [validation] do not permit blank values
- [x] [item] do not render item if is null
- [x] [server] add a json server
- [x] [signals] delete item from server
- [x] [signals] delete all items from server
- [x] [signals] update item from server
- [x] [scroll] scroll when first load
- [x] [scroll] scroll after new item
- [x] [shortcut] ESC cancel insert new item
- [x] [shortcut] ESC cancel editing
- [x] [shortcut] up/down arrows goes up/down when no data on textarea
- [x] [shortcut] page up/down arrows goes up/down when no data on textarea
- [x] [firebase] integrate with firebase module
- [x] [firebase] facebook login
  - https://console.firebase.google.com/project/md-list-43a87/authentication/providers
  - https://developers.facebook.com/apps/559780907564132/fb-login/
- [ ] [localstorage] create a localstorage service
- [ ] [firebase] deploy
- [ ] [user] save user to a localstorage
- [x] [chat] listen to some_data
- [x] [chat] get some_data
- [ ] [chat] post some_data
- [ ] [chat] delete some_data
- [ ] [chat] put some_data
- [ ] [chat] show who post item
- [ ] [chat] must login to post
- [ ] [chat] can delete only self items
