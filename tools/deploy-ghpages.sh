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
echo " - ELASTIC_SEARCH_URI=$ELASTIC_SEARCH_URI"

echo ""
echo "Building"

CURRENT_BRANCH=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')

NODE_ENV=$NODE_ENV                     \
API_KEY=$API_KEY                       \
AUTH_DOMAIN=$AUTH_DOMAIN               \
DATABASE_URL=$DATABASE_URL             \
STORAGE_BUCKET=$STORAGE_BUCKET         \
ELASTIC_SEARCH_URI=$ELASTIC_SEARCH_URI \
./node_modules/.bin/webpack

cp -R src/assets dist

git checkout gh-pages

cp dist/main.js .
cp dist/index.html .

mkdir -p assets
cp -R dist/assets/ ./assets/

git add .
git commit -m"Deploy" || true
git push

# clean
rm ./main.js ./index.html

# back
git checkout $CURRENT_BRANCH
