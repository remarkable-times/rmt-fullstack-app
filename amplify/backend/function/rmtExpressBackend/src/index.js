const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');
const SecretsManager = require('aws-sdk/clients/secretsmanager')
const initDb = require('./util/dbConnect')
const EnvironmentService = require('./util/EnvironmentService')


const server = awsServerlessExpress.createServer(app);

// new up what needs to be newed up
const envService = new EnvironmentService(new SecretsManager());

exports.handler = async (event, context) => {
  // initialize env vars and db connection
  await envService.init();
  await initDb(envService);
  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
};



