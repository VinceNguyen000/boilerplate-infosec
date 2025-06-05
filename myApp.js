const express = require('express');
const helmet = require('helmet');
const app = express()

app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({
  action: 'deny'
}));
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());
app.use(helmet.hsts({
  maxAge: 90 * 24 * 60 * 60, // can use variable/90 days in seconds
  force: true}
));