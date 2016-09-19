#!/bin/bash
set -e

. .env-dev

NODE_ENV=$NODE_ENV                     \
API_KEY=$API_KEY                       \
AUTH_DOMAIN=$AUTH_DOMAIN               \
DATABASE_URL=$DATABASE_URL             \
STORAGE_BUCKET=$STORAGE_BUCKET         \
./node_modules/.bin/webpack-dev-server
