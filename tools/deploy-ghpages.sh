#!/bin/bash
set -e

. ./.env-$NODE_ENV

CURRENT_BRANCH=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')

npm run build

git checkout gh-pages
cp dist/main.js .
cp dist/index.html .
git add .
git commit -m"Deploy" || true
git push
rm ./main.js ./index.html
git checkout $CURRENT_BRANCH
