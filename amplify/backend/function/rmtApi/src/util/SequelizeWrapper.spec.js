const SequelizeWrapper = require('./SequelizeWrapper');
const EnvironmentService = require('./EnvironmentService');
const Sequelize = require('sequelize');

let target;
let envSvc;

before(async () => {
  envSvc = new EnvironmentService();
  await envSvc.init();

  target = new SequelizeWrapper(
    Sequelize,
    envSvc
  );
});

describe('#SequelizeWrapper', () => {
  it.only('makes a connection', async () => {
    const dbConn = await target.getConnection();

    // test out making a connection and synchronizing a model
    const User = dbConn.define('user', {
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      googleId: {
        type: Sequelize.STRING
      }
    })
    await User.sync();

  });
});