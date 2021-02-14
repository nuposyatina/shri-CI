install:
	yarn install

client:
	mkdir -p dist/
	cp frontend/src/sw.js dist/
	yarn start

build-client:
	mkdir -p dist/
	cp frontend/src/sw.js dist/
	yarn build

server:
	node backend/server.js

test-u:
	yarn test

test-i:
	node_modules/.bin/hermione

watch:
	yarn watch