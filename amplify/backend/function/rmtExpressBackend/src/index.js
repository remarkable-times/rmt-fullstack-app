const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');
const SecretsManager = require('aws-sdk/clients/secretsmanager')
const secretsManager = new SecretsManager();
const initDb = require('./util/dbConnect')


const server = awsServerlessExpress.createServer(app);

exports.handler = async (event, context) => {
  await initDb();
  //hello
  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
};



