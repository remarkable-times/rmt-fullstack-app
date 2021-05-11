const awsServerlessExpress = require('aws-serverless-express');
const createApp = require('./app');

const SecretsManager = require('aws-sdk/clients/secretsmanager');
const EnvironmentService = require('./util/EnvironmentService');
const initDbConnection = require('./util/dbConnect');

// new up what needs to be newed up
let envService = new EnvironmentService(new SecretsManager());
let server;
let connection;


exports.handler = async (event, context) => {
  envService = await envService.init();
  connection = await initDbConnection(envService);
  const app = createApp(envService, connection);
  server = awsServerlessExpress.createServer(app);
  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
};
