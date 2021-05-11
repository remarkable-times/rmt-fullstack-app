const createApp = require('./app');

const SecretsManager = require('aws-sdk/clients/secretsmanager');
const EnvironmentService = require('./util/EnvironmentService');
const initDbConnection = require('./util/dbConnect');

// new up what needs to be newed up
let envService = new EnvironmentService(new SecretsManager());
let connection;


(async _ => {
  envService = await envService.init();
  connection = await initDbConnection(envService);
  createApp(envService, connection);
})();
