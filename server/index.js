// ENTRY POINT FOR SERVER

const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));// logging middleware

app.use(express.static(path.join(__dirname, '../public'))); //static middleware

app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
