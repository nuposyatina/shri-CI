install:
	yarn install

client:
	yarn start

server-build:
	tsc -p backend/tsconfig.json

server-start:
	node backend/build/server.js

test-u:
	yarn test

test-i:
	node_modules/.bin/hermione

watch:
	yarn watch