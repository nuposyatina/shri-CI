import express from 'express';
import path from 'path';
import nodeFetch from 'node-fetch';
import https from 'https';
import url from 'url';
import util from 'util';

const exec = util.promisify(require('child_process').exec);
import simpleGit from 'simple-git/promise';

const app = express();
const agent = new https.Agent({
  rejectUnauthorized: false
})
const { AUTH_TOKEN } = require('dotenv').config().parsed;

app.use(express.static(path.resolve(__dirname, 'static')));
app.use((req: express.Request, res: express.Response, next) => {
  const { origin } = req.headers;
  if (origin) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

export type ResponseSettingsGet = {
  data?: {
    id: String,
    repoName: String,
    buildCommand: String,
    mainBranch: String,
    period: Number
  }
};

app.get<{}, ResponseSettingsGet>('/api/settings', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  nodeFetch('https://hw.shri.yandex/api/conf', {
    headers: { 
      'Authorization': `Bearer ${AUTH_TOKEN}`
    },
    agent: agent
  }).
  then((result) => result.json()).
  then((settings: ResponseSettingsGet) => {
    console.info('Settings received');
    return res.send(settings)
  }).
  catch((err) => next(err));
});

export type RequestSettingsBody = {
  repoName: String,
  buildCommand: String,
  mainBranch: String,
  period: Number
}

const readJSON = (req: express.Request) => {
  return new Promise<RequestSettingsBody>((resolve, reject) => {
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

const cloneRepo = (repoName: String) => {
  return exec('rm -rf repo').
  then(() => simpleGit().clone(`https://github.com/${repoName}`, './repo'));
};

const sendSettings = (body: RequestSettingsBody) => {
  return nodeFetch('https://hw.shri.yandex/api/conf', {
    method: 'POST',
    headers: { 
      'Authorization': `Bearer ${AUTH_TOKEN}`,
      'Content-type': 'application/json'
    },
    agent: agent,
    body: JSON.stringify(body)
  });
};

export type ResponseSettingsPost = { status: 200 };

app.post<{}, ResponseSettingsPost, RequestSettingsBody>('/api/settings', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  readJSON(req).
  then((body: RequestSettingsBody) => {
    const { repoName } = body;
    return Promise.all([cloneRepo(repoName), sendSettings(body)]);
  }).
  then(([, result]) => res.send(result)).
  catch((err) => next(err));
});

export type Build = {
  id: String,
  configurationId: String,
  buildNumber: Number,
  commitMessage: String,
  commitHash: String,
  branchName: String,
  authorName: String,
  status: String, //заменить на enum
  start?: String,
  duration?: Number
}
export type ResponseBuildsGet = {
  data?: Build[]
}

app.get<{}, ResponseBuildsGet>('/api/builds', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const { search } = url.parse(req.originalUrl);
  nodeFetch(`https://hw.shri.yandex/api/build/list${search ? search : ''}`, {
    headers: { 
      'Authorization': `Bearer ${AUTH_TOKEN}`
    },
    agent: agent
  }).
  then(result => result.json()).
  then(result => res.send(result)).
  catch((err) => next(err));
});

app.post('/api/builds/:commitHash', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const { commitHash } = req.params;
  const reqBody = {
    commitHash
  };
  simpleGit('./repo').show(['-s', '--format=%B', '-n', '1', commitHash]).
  then(log => {
    reqBody.commitMessage = log
    return simpleGit('./repo').show(['-s', '--format=%an', commitHash])
  }).
  then(log => {
    reqBody.authorName = log
    return simpleGit('./repo').branch(['--contains', commitHash, '-a']);
  }).
  then(log => {
    reqBody.branchName = log.current
    return nodeFetch('https://hw.shri.yandex/api/build/request', {
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

app.get('/api/builds/:buildId/log', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const { buildId } = req.params;

  nodeFetch(`https://hw.shri.yandex/api/build/log?buildId=${buildId}`, {
    headers: { 
      'Authorization': `Bearer ${AUTH_TOKEN}`
    },
    agent: agent
  }).
  then(result => result.text()).
  then(result => res.send(result)).
  catch((err) => next(err));
});

app.get('/api/builds/:buildId', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const { buildId } = req.params;

  nodeFetch(`https://hw.shri.yandex/api/build/details?buildId=${buildId}`, {
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
