//3rd party dependencies
const SecretsManager = require('aws-sdk/clients/secretsmanager');
var express = require('express');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

// this package dependencies
const initDb = require('./util/dbConnect');
const EnvironmentService = require('./util/EnvironmentService');
const getCachedDbConnection = require('./util/dbConnect');

// new up what needs to be newed up
const envService = new EnvironmentService(new SecretsManager());


// declare a new express app
var app = express();
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});


app.get('/api', async function (req, res) {
  console.log('\n you hit the get route');
  const dbConnection = await getCachedDbConnection();
  // console.log(dbConnection);
  const data = await dbConnection.execute('SELECT * FROM tutorials_tbl');
  console.log(data[0]);
  res.json({
    success: 'get call succeed!',
    data: data[0],
    url: req.url
  });
});

envService.init().then(envSvc => {
  console.log('environment service initialized, initializing db next');
  initDb(envSvc).then(_ => {
    console.log('db initialized, starting app');
    app.listen(3000, function () {
      console.log('App started');
    });
  });
})
  .catch(err => {
    console.warn('initialization erro thrown before app could be started')
  });


/* Export the app object. When executing the application local this does nothing. However, to port it to AWS Lambda we will create a wrapper around that will load the app from
this file */
module.exports = app;


