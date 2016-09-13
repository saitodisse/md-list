# md list

[markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) chat with [cerebral](http://www.cerebraljs.com/), [firebase](https://firebase.google.com) and [flex-box](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

- [demo](https://saitodisse.github.io/md-list) (You can use [Cerebral Debbuger Chrome Extension](https://chrome.google.com/webstore/detail/cerebral-debugger/ddefoknoniaeoikpgneklcbjlipfedbb))
- [github](https://github.com/saitodisse/md-list)

---------

## Features

- [x] Flexbox css
- [x] Firebase rules (restrict edit/delete only message owner)
- [x] Edit already sent message
- [x] Notifications about other users messages and deletes
- [x] Easy one step deploy to gh-pages

#### TODO

- [ ] Channels
- [ ] End-to-end message encryption

---------

### run dev

##### 1. Firebase project and keys

- Create a new project on [Firebase](https://console.firebase.google.com/)
- Get your __API key__ by clicking on "Add Firebase to your web app"
- Copy `.env-example` to `.env-dev`

```sh
cp .env-example .env-dev`
```

- Edit `API_KEY`, `AUTH_DOMAIN`, `DATABASE_URL` and `STORAGE_BUCKET` on **.env-dev**

##### 2. Firebase database rules

- Copy and paste [database rules content](https://github.com/saitodisse/md-list/blob/master/docs/firebase_rules.java) onto **database rules** on Firebase console

##### 3. Firebase facebook authentication

- Configure a Facebook auth following __steps 2 and 3__ from _Before you begin_ section: https://firebase.google.com/docs/auth/web/facebook-login

##### 4. Start app

```sh
npm install
npm start
```

- Open: http://localhost:3000

---------


### deploy to gh-pages

This will build the app and push to `gh-pages` __branch__

- Create a new firebase project or copy dev settings

```sh
cp .env-dev .env-prod
```

- Build and deploy

```sh
# with debugger
npm run deploy-dev
# without debugger
npm run deploy-prod
```

Open: https://--your_github_name--.github.io/md-list/

_You must make your facebook app public to allow others to login (https://developers.facebook.com/apps/--project_id--/review-status/)_

---------

If you want a server/client example made with `express` and `JSON server` go to this branch: https://github.com/saitodisse/md-list/tree/json-server
