install:
	yarn install

client:
	yarn start

server-build:
	tsc -p tsconfig.json

server-start:
	node build/server.js

test-u:
	yarn test

test-i:
	node_modules/.bin/hermione

watch:
	yarn watch