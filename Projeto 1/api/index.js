require('dotenv').config();

require('./db');

const express = require('express');
const routes = require('./routes');
const LogModel = require('./models/Log');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log('[' + (new Date()) + '] ' + req.method + ' ' + req.url);
  let log = {};
  log.date = new Date();
  log.action = req.method + req.url;
  rec = async (log) => {
    try {
      let logValidate = log.action.split('/');
      if (logValidate[1] === 'favicon.ico') {
      } else {
        await LogModel.create(log);
      }
    } catch (error) {
      console.log(error);
    }
  }
  rec(log);
  next();
});

app.use(routes);

app.use((req, res, next) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}/`);
});
