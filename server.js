const express = require('express');
const path = require('path');

const app = express();

// app.get('/api/settings');

// app.post('/api/settings');

// app.get('api/builds');

// app.post('/api/builds/:commitHash');

// app.get('/api/builds/:buildId');

// app.get('/api/builds/:buildId/log');
app.use(express.static(path.resolve(__dirname, 'static')));
// app.get('/', (req, res) => {

// });

app.listen(3000);
