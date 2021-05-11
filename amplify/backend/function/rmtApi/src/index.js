const awsServerlessExpress = require('aws-serverless-express');
const createApp = require('./app');

const SecretsManager = require('aws-sdk/clients/secretsmanager');
const EnvironmentService = require('./util/EnvironmentService');
const getNewOrCachedConn = require('./util/dbConnect');

// new up what needs to be newed up
let envService = new EnvironmentService(new SecretsManager());
let server;
let connection;


exports.handler = async (event, context) => {
  envService = await envService.init();
  connection = await getNewOrCachedConn(envService);
  const app = createApp(envService, connection);
  server = awsServerlessExpress.createServer(app);
  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
};
