
var express = require('express')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
var app = express()
app.use(awsServerlessExpressMiddleware.eventContext())
const getCachedDbConnection = require('./util/dbConnect')


// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});


app.get('/api', async function (req, res) {
  console.log("\n you hit the get route");
  const dbConnection = await getCachedDbConnection();
  // console.log(dbConnection);
  const data = await dbConnection.execute('SELECT * FROM tutorials_tbl');
  console.log(data[0]);
  res.json({ success: 'get call succeed!', url: req.url });
});

app.listen(3000, function () {
  console.log("App started")
});

/* Export the app object. When executing the application local this does nothing. However, to port it to AWS Lambda we will create a wrapper around that will load the app from
this file */
module.exports = app


