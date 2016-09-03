# md list

[markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) chat with [cerebral](http://www.cerebraljs.com/), [firebase](https://firebase.google.com) and [flex-box](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

- [demo](https://saitodisse.github.io/md-list)
- [github](https://github.com/saitodisse/md-list)

---------


### run dev

##### 1. Firebase project and keys

- Create a project on firebase https://console.firebase.google.com/
- Get your api key by clicking on "Add Firebase to your web app"
- Copy `.env-example` to `.env-dev`

```sh
cp .env-example .env-dev`
```

- Edit API_KEY, AUTH_DOMAIN, DATABASE_URL and STORAGE_BUCKET on `.env-dev`

##### 3. Firebase database rules

- Copy and paste database rules (https://github.com/saitodisse/md-list/blob/master/docs/firebase_rules.md) onto database rules on firebase console

##### 4. Firebase facebook authentication

- Configure a facebook auth following steps 2 and 3 from _Before you begin_ section: https://firebase.google.com/docs/auth/web/facebook-login

##### 5. Start app

```sh
    npm install
    npm start
```

- Open: http://localhost:3000

---------


### deploy to gh-pages

This will build the app and push to `gh-pages` branch

- Create a new firebase project or copy dev settings

```sh
cp .env-dev .env-prod
```

- Build and deploy

```sh
npm run deploy
```

Open: https://--your_github_name--.github.io/md-list/

_You must make your facebook app public to allow others to login (https://developers.facebook.com/apps/--project_id--/review-status/)_

---------

If you want a server/client example made with `express` and `JSON server` go to this branch: https://github.com/saitodisse/md-list/tree/json-server
