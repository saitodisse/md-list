# md list

## markdown chat with cerebral, firebase and flex-box

- demo: https://saitodisse.github.io/md-list
- cerebral controller: http://www.cerebraljs.com/
- firebase: https://firebase.google.com

---------


### run dev

```sh
# create a project on firebase with a database
cp .env-example .env-dev
# edit API_KEY, AUTH_DOMAIN, DATABASE_URL and STORAGE_BUCKET on .env-dev
# apply rules from /docs/firebase_rules.md on firebase console

npm install
npm start
```

- open: http://localhost:3000

---------


### deploy to gh-pages

```sh
# you can copy dev settings
cp .env-dev .env-prod
npm run deploy
```

---------

If you want a server/client example made with `express` and `JSON server` go to this branch: https://github.com/saitodisse/md-list/tree/json-server

---------

## task-list

### done

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
- [-] [localstorage] create a localstorage service
- [-] [firebase] deploy
- [-] [user] save user to a localstorage
- [x] [chat] listen to some_data
- [x] [chat] get some_data
- [x] [chat] post some_data
- [x] [chat] delete some_data
- [x] [chat] put some_data
- [x] [chat] show who post item
- [x] [chat] must login to post
- [-] [chat] can delete only self items
- [x] [chat-list] listen to data
- [x] [chat-list] get data
- [x] [chat-list] post
- [x] [chat-list] put
- [x] [chat-list] delete
- [x] [chat-list] show user name
- [x] [chat-list] show user photo
- [x] [listApp] remove listApp
- [x] [login] if there is no user aways redirect to login
- [x] [login] facebook login button
- [x] [login] show logged user after login
- [x] [chat-list] only user can edit his item
- [x] [chat-list] only user can delete his item
- [x] [deploy] build and deploy to gh-pages on github
