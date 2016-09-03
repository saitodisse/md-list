#!/bin/bash
set -e

npm run build
git checkout gh-pages
cp dist/main.js .
cp dist/index.html .
git add .
git commit -m"Deploy" || true
git push
git checkout master
