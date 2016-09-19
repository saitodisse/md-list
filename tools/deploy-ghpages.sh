#!/bin/bash
set -e

. ./$1

echo ""
echo " - NODE_ENV=$NODE_ENV"
echo " - API_KEY=$API_KEY"
echo " - AUTH_DOMAIN=$AUTH_DOMAIN"
echo " - DATABASE_URL=$DATABASE_URL"
echo " - STORAGE_BUCKET=$STORAGE_BUCKET"
echo " - S3_BUCKET_URL=$S3_BUCKET_URL"

echo ""
echo "Building"

CURRENT_BRANCH=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')

NODE_ENV=$NODE_ENV             \
API_KEY=$API_KEY               \
AUTH_DOMAIN=$AUTH_DOMAIN       \
DATABASE_URL=$DATABASE_URL     \
STORAGE_BUCKET=$STORAGE_BUCKET \
./node_modules/.bin/webpack

git checkout gh-pages
cp dist/main.js .
cp dist/index.html .
git add .
git commit -m"Deploy" || true
git push
rm ./main.js ./index.html
git checkout $CURRENT_BRANCH
