#!/bin/bash
set -e

. ./.env-$NODE_ENV

npm run build

s3cmd mb $S3_BUCKET_URL --region=sa-east-1 || true
s3cmd ws-create $S3_BUCKET_URL             || true
s3cmd setacl $S3_BUCKET_URL --acl-public   || true

# s3cmd del --recursive --force $S3_BUCKET_URL

gzip dist/index.html -9 -c > dist/index.html.gz
gzip dist/main.js -9 -c > dist/main.js.gz

s3cmd sync ./dist/index.html.gz \
           $S3_BUCKET_URL/index.html \
           --delete-removed \
           --reduced-redundancy \
           --acl-public \
           -m text/html \
           --add-header='Cache-Control:max-age=3600' \
           --add-header='Content-Encoding:gzip'

s3cmd sync ./dist/main.js.gz \
           $S3_BUCKET_URL/main.js \
           --delete-removed \
           --reduced-redundancy \
           --acl-public \
           -m text/js \
           --add-header='Cache-Control:max-age=3600' \
           --add-header='Content-Encoding:gzip'

s3cmd ws-info $S3_BUCKET_URL               || true
