const createApp = require('./app');

const SecretsManager = require('aws-sdk/clients/secretsmanager');
const EnvironmentService = require('./util/EnvironmentService');
// const initDbConnection = require('./util/dbConnect');
const SequelizeWrapper = require('./db/SequelizeWrapper');
const { Sequelize } = require('sequelize');
const initModels = require('./db/model');


// new up what needs to be newed up
let envService = new EnvironmentService(new SecretsManager());

(async _ => {
  // initialize the environment service asynchronously, in cloud env we'll need to get secret values via async api call but locally is just sources env vars
  envService = await envService.init();
  // initialize asynchronous database connection
  const sequelizeWrapper = new SequelizeWrapper(Sequelize, envService);
  const sqlizeConn = await sequelizeWrapper.createConnection();
  initModels(sqlizeConn);
  //https://sequelize.org/master/manual/model-basics.html#synchronizing-all-models-at-once
  await sqlizeConn.sync(); //! WARNING -- never use this in production, force:true  will drop and re create tables
  console.log('All models were synchronized successfully.');
  // connection = await initDbConnection(envService);
  createApp(envService, sqlizeConn);
})();
