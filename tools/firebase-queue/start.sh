#!/bin/bash
set -e

. .env-dev

NODE_ENV=$NODE_ENV                                     \
API_KEY=$API_KEY                                       \
AUTH_DOMAIN=$AUTH_DOMAIN                               \
DATABASE_URL=$DATABASE_URL                             \
STORAGE_BUCKET=$STORAGE_BUCKET                         \
ELASTIC_SEARCH_URI=$ELASTIC_SEARCH_URI                 \
FIREBASE_CRED_JSON_PATH=$FIREBASE_CRED_JSON_PATH       \
node ./queue/start.js
