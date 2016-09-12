#!/bin/bash
set -e

npm run build-prod
git checkout gh-pages
cp dist/main.js .
cp dist/index.html .
git add .
git commit -m"Deploy" || true
git push
rm ./main.js ./index.html
git checkout master
