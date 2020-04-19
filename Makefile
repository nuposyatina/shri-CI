install:
	yarn install

client:
	yarn start

server:
	node backend/server.js

test-u:
	yarn test

test-i:
	node_modules/.bin/hermione

watch:
	yarn watch