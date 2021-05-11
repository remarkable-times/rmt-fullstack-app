//3rd party dependencies
var express = require('express');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

// this package dependencies
const getCachedDbConnection = require('./util/dbConnect');

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
  const dbConnection = await getCachedDbConnection(req.apiGateway.context.envService);
  const data = await dbConnection.execute('SELECT * FROM tutorials_tbl');
  res.json({
    success: 'get call succeed!',
    data: data[0],
    url: req.url
  });
});


app.listen(3000, function () {
  console.log('App started');
});


/* Export the app object. When executing the application local this does nothing. However, to port it to AWS Lambda we will create a wrapper around that will load the app from
this file */
module.exports = app;


