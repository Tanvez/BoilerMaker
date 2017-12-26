// ENTRY POINT FOR SERVER

const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./server/db/models'); // must specify the db used in models not from the db-index file
const port = process.env.PORT || 3000;



app.use(morgan('dev'));// logging middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./server/apiRoutes'));//ROUTES

app.use(express.static(path.join(__dirname, './public'))); //static middleware

app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, './public/index.html')); // sends default to html page
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'FailWhale');
});
db.sync({}).then( // this can be very useful if you deploy to Heroku!
  app.listen(port, function () {
    console.log("Knock, knock");
    console.log("Who's there?");
    console.log(`Your server, listening on port ${port}`);
  })
);
module.exports = app;
