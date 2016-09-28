#!/bin/bash
set -e

. ./$1

cp -R src/assets dist

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

NODE_ENV=$NODE_ENV                     \
API_KEY=$API_KEY                       \
AUTH_DOMAIN=$AUTH_DOMAIN               \
DATABASE_URL=$DATABASE_URL             \
STORAGE_BUCKET=$STORAGE_BUCKET         \
ELASTIC_SEARCH_URI=$ELASTIC_SEARCH_URI \
./node_modules/.bin/webpack

echo ""
echo "S3"
path=$S3_BUCKET_URL
count=`s3cmd ls $path | wc -l`
if [[ $count -gt 0 ]]; then
  echo "Bucket already exist - OK"
else
  echo "Creating and configuring new bucket..."
  s3cmd mb $S3_BUCKET_URL --region=sa-east-1
  s3cmd ws-create $S3_BUCKET_URL
  s3cmd setacl $S3_BUCKET_URL --acl-public
fi

# s3cmd del --recursive --force $S3_BUCKET_URL

gzip dist/index.html -9 -c > dist/index.html.gz
gzip dist/main.js -9 -c > dist/main.js.gz

s3cmd sync ./dist/index.html.gz                      \
           $S3_BUCKET_URL/index.html                 \
           --delete-removed                          \
           --reduced-redundancy                      \
           --acl-public                              \
           -m text/html                              \
           --add-header='Cache-Control:max-age=3600' \
           --add-header='Content-Encoding:gzip'

s3cmd sync ./dist/main.js.gz                         \
           $S3_BUCKET_URL/main.js                    \
           --delete-removed                          \
           --reduced-redundancy                      \
           --acl-public                              \
           -m text/js                                \
           --add-header='Cache-Control:max-age=3600' \
           --add-header='Content-Encoding:gzip'

s3cmd sync ./dist/assets                             \
           $S3_BUCKET_URL                            \
           --delete-removed                          \
           --reduced-redundancy                      \
           --acl-public                              \
           --add-header='Cache-Control:max-age=3600'

s3cmd ws-info $S3_BUCKET_URL
