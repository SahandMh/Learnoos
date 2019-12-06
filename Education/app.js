const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const ParseServer = require('parse-server').ParseServer;
const ParseDashboard = require('parse-dashboard');
require('dotenv').config();
const port = process.env.PORT || 1337;

const indexRouter = require('./routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static('public', {maxAge: 31557600000}));

const api = new ParseServer({
  databaseURI: process.env.databaseURI,
  cloud: process.env.CLOUD_CODE_MAIN || __dirname + '/cloud/main.js',
  appId: process.env.appId,
  restAPIKey: process.env.restAPIKey,
  javascriptKey: process.env.javascriptKey,
  serverURL: `${process.env.serverUrl}/parse`,
  masterKey: process.env.masterKey,
});

// make the Parse Server available at /parse
app.use('/parse', api);

const dashboard = new ParseDashboard(
    {
      apps: [
        {
          serverURL: `${process.env.serverUrl}/parse`,
          appId: process.env.appId,
          masterKey: process.env.masterKey,
          appName: process.env.appName,
        },
      ],
      users: [
        {
          user: process.env.masterUsername,
          pass: process.env.masterPassword,
        },
      ],
    },
    {allowInsecureHTTP: true},
);

// make the Parse Dashboard available at /dashboard
app.use('/dashboard', dashboard);

const httpServer = require('http').createServer(app);
httpServer.listen(port);

module.exports = app;
