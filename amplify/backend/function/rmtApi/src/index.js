const awsServerlessExpress = require('aws-serverless-express');
const createApp = require('./app');

const SecretsManager = require('aws-sdk/clients/secretsmanager');
const EnvironmentService = require('./util/EnvironmentService');
const SequelizeWrapper = require('./db/SequelizeWrapper');
const { Sequelize } = require('sequelize');
const initModels = require('./db/model');
const dbSyncUtil = require('./util/dbSyncUtil');

// new up what needs to be newed up
let envService = new EnvironmentService(new SecretsManager());
let server;
let sqlizeConn;
let app;


exports.handler = async (event, context) => {
  envService = await envService.init();
  // initialize asynchronous database connection
  if (sqlizeConn === undefined) {
    console.log('db connection NOT exists, creating');
    const sequelizeWrapper = new SequelizeWrapper(Sequelize, envService);
    sqlizeConn = await sequelizeWrapper.createConnection();
  } else {
    console.log('connection exists, will be re-used');
  }

  //? DB SYNC REQUESTED SCENARIO
  if (event.eventType === 'db-sync') {
    /* this is a special event type
if the lambda is called manually with special input parameters the express app will not be started. It will just sync the database models according to sequelize setup and return out of the Lambda without starting the RESTful backend
*/
    console.log('\n *** db-sync requested *** \n');
    await dbSyncUtil(sqlizeConn, event);
    return;
  }

  //? NORMAL RESTFUL BACKEND EXECUTION PATH
  initModels(sqlizeConn);   // register the models with sequelize
  if (app === undefined) {
    app = createApp(envService, sqlizeConn);
  }
  if (server === undefined) {
    server = awsServerlessExpress.createServer(app);
  }
  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
};