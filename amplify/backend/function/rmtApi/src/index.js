const awsServerlessExpress = require('aws-serverless-express');
const createApp = require('./app');

const SecretsManager = require('aws-sdk/clients/secretsmanager');
const EnvironmentService = require('./util/EnvironmentService');
const getNewOrCachedConn = require('./util/dbConnect');

// new up what needs to be newed up
let envService = new EnvironmentService(new SecretsManager());
let server;
let connection;
let app;


exports.handler = async (event, context) => {
  envService = await envService.init();
  connection = await getNewOrCachedConn(envService);
  if (app == undefined) {
    app = createApp(envService, connection);
  }
  if (server == undefined) {
    server = awsServerlessExpress.createServer(app);
  }
  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
};
