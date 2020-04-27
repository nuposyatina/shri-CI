install:
	yarn install

client:
	yarn start

server:
	TS_NODE_FILES=1 node backend/server.ts -r ts-node/register

test-u:
	yarn test

test-i:
	node_modules/.bin/hermione

watch:
	yarn watch