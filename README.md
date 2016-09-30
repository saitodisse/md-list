# md list

[markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) chat with [cerebral](http://www.cerebraljs.com/), [firebase](https://firebase.google.com) and [flex-box](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

- [demo](https://saitodisse.github.io/md-list) (You can use [Cerebral Debbuger Chrome Extension](https://chrome.google.com/webstore/detail/cerebral-debugger/ddefoknoniaeoikpgneklcbjlipfedbb))
- [github](https://github.com/saitodisse/md-list)

---------

## Features

- [x] Facebook Login
- [x] Keyboard shortcuts to scroll list if text area is empty
- [x] Firebase rules (restrict edit/delete only message owner)
- [x] Edit already sent message
- [x] Notifications about other users messages and deletes (https://github.com/saitodisse/md-list/pull/7)
- [x] Easy one step deploy to gh-pages
- [x] Flexbox css

#### TODO

- [ ] Rooms/Channels (https://github.com/saitodisse/md-list/issues/3)
- [ ] Responsive design for mobiles (https://github.com/saitodisse/md-list/issues/6)
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


### Deploy

- Create a new firebase project or copy dev settings

```sh
cp .env-dev .env-production
```

```sh
# Github: push only dist files to `gh-pages`
# https://--your_github_name--.github.io/md-list/
./tools/deploy-ghpages .env-dev

# S3: create bucket, gzip and send files with s3cmd
# http://__S3_BUCKET_URL__.s3-website-sa-east-1.amazonaws.com/
./tools/deploy-s3 .env-dev
```


_You must make your facebook app public to allow others to login (https://developers.facebook.com/apps/--project_id--/review-status/)_

---------

If you want a server/client example made with `express` and `JSON server` go to this branch: https://github.com/saitodisse/md-list/tree/json-server


# Elastic Search

Reff:

- Search by URL options: https://github.com/elastic/elasticsearch/blob/2.4/docs/reference/search/uri-request.asciidoc
- API otions: https://www.elastic.co/guide/en/elasticsearch/reference/current/common-options.html
- CORS: https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-http.html
- Cluster Health: https://www.elastic.co/guide/en/elasticsearch/reference/current/_cluster_health.html

Free:

- https://bonsai.io/pricing (125MB)
- http://www.searchly.com/#pricing (5MB)
- https://www.slant.co/topics/170/~hosted-elasticsearch-services

### Arch linux install

```sh
sudo pacman -S elasticsearch

# enable/ start
sudo systemctl enable elasticsearch
sudo systemctl start elasticsearch

# info
sudo systemctl show elasticsearch

# configure: edit elasticsearch.yml
sudo subl3 /etc/elasticsearch/elasticsearch.yml
# enable CORS
http.cors.enabled: true
http.cors.allow-origin: /https?:\/\/localhost(:[0-9]+)?/

# restart to enable changes
sudo systemctl restart elasticsearch
```

