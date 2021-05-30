

const { Sequelize } = require('sequelize');
const SequelizeWrapper = require('./SequelizeWrapper');
const EnvService = require('../util/EnvironmentService');
const SecretsManager = require('aws-sdk/clients/secretsmanager');



describe('#SequelizeWrapper', () => {
  let target;
  let envSvc;

  before(async () => {
    envSvc = new EnvService(new SecretsManager());
    await envSvc.init();
    target = new SequelizeWrapper(Sequelize, envSvc);
  });

  it('connects to db', async () => {
    let connection = await target.createConnection();
    try {
      await connection.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }

  });
});