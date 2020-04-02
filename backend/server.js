const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const https = require('https');
const url = require('url');
const util = require('util');

const exec = util.promisify(require('child_process').exec);
const simpleGit = require('simple-git/promise');

const app = express();
const agent = new https.Agent({
  rejectUnauthorized: false
})
const { AUTH_TOKEN } = require('dotenv').config().parsed;

app.use(express.static(path.resolve(__dirname, 'static')));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

app.get('/api/settings', (req, res, next) => {
  fetch('https://hw.shri.yandex/api/conf', {
    headers: { 
      'Authorization': `Bearer ${AUTH_TOKEN}`
    },
    agent: agent
  }).
  then((result) => result.json()).
  then((settings) => {
    console.info('Settings received');
    return res.send(settings)
  }).
  catch((err) => next(err));
});

const readJSON = (req) => {
  return new Promise((resolve, reject) => {
    let rawBody = '';
    req.on('data', (chunk) => rawBody += chunk);
    req.once('end', () => {
      try {
        return resolve(JSON.parse(rawBody));
      } catch(err) {
        return reject(err);
      }
    });
    req.once('error', reject);
  });
};

const cloneRepo = (repoName) => {
  return exec('rm -rf repo').
  then(() => simpleGit().clone(`https://github.com/${repoName}`, './repo'));
};

const sendSettings = (body) => {
  return fetch('https://hw.shri.yandex/api/conf', {
    method: 'POST',
    headers: { 
      'Authorization': `Bearer ${AUTH_TOKEN}`,
      'Content-type': 'application/json'
    },
    agent: agent,
    body: JSON.stringify(body)
  });
};

app.post('/api/settings', (req, res, next) => {
  readJSON(req).
  then(body => {
    const { repoName } = body;
    return Promise.all([cloneRepo(repoName), sendSettings(body)]);
  }).
  then(([, result]) => res.send(result)).
  catch((err) => next(err));
});

app.get('/api/builds', (req, res, next) => {
  const { search } = url.parse(req.originalUrl);
  console.log(search)
  fetch(`https://hw.shri.yandex/api/build/list${search ? search : ''}`, {
    headers: { 
      'Authorization': `Bearer ${AUTH_TOKEN}`
    },
    agent: agent
  }).
  then(result => result.json()).
  then(result => res.send(result)).
  catch((err) => next(err));
});

app.post('/api/builds/:commitHash', (req, res, next) => {
  const { commitHash } = req.params;
  console.log(req.params)
  const reqBody = {
    commitHash
  };
  simpleGit('./repo').show(['-s', '--format=%B', '-n', '1', commitHash]).
  then(log => {
    console.log('!!!', log)
    reqBody.commitMessage = log
    return simpleGit('./repo').show(['-s', '--format=%an', commitHash])
  }).
  then(log => {
    reqBody.authorName = log
    return simpleGit('./repo').branch(['--contains', commitHash, '-a']);
  }).
  // then(log => )
  // }).
  then(log => {
    reqBody.branchName = log.current
    console.log(reqBody)
    return fetch('https://hw.shri.yandex/api/build/request', {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${AUTH_TOKEN}`,
        'Content-type': 'application/json'
      },
      agent: agent,
      body: JSON.stringify(reqBody)
    });
  }).
  then(result => result.json()).
  then(result => res.send(result)).
  catch((err) => next(err));
});

app.get('/api/builds/:buildId/log', (req, res, next) => {
  const { buildId } = req.params;

  fetch(`https://hw.shri.yandex/api/build/log?buildId=${buildId}`, {
    headers: { 
      'Authorization': `Bearer ${AUTH_TOKEN}`
    },
    agent: agent
  }).
  then(result => result.text()).
  then(result => res.send(result)).
  catch((err) => next(err));
});

app.get('/api/builds/:buildId', (req, res, next) => {
  const { buildId } = req.params;

  fetch(`https://hw.shri.yandex/api/build/details?buildId=${buildId}`, {
    headers: { 
      'Authorization': `Bearer ${AUTH_TOKEN}`
    },
    agent: agent
  }).
  then(result => result.json()).
  then(result => res.send(result)).
  catch((err) => next(err));
});

app.listen(3000);
