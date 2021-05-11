const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');
const server = awsServerlessExpress.createServer(app);
const SecretsManager = require('aws-sdk/clients/secretsmanager');
const EnvironmentService = require('./util/EnvironmentService');
const initDbConnection = require('./util/dbConnect');

// new up what needs to be newed up
let envService = new EnvironmentService(new SecretsManager());


exports.handler = async (event, context) => {
  envService = await envService.init();
  context['envService'] = envService;
  await initDbConnection(envService);
  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
};
