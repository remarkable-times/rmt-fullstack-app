
const varNames = require('../enum/envEnum')

class SequelizeWrapper {
  /**
   * 
   * @param {*} Sequelize sequlize lib that is not newed up yet
   * @param {*} envSvc pre initialized and newed up environment service
   */
  constructor(Sequelize, envSvc) {
    this.Sequelize = Sequelize;
    this.envSvc = envSvc;
    this.connection = null;
  }

  async getConnection() {
    // with database, username, and password in the options object
    this.connection = new this.Sequelize(
      {
        database: 'RMT_DB',
        username: this.envSvc.get(varNames.DB_USER),
        password: this.envSvc.get(varNames.DB_PASSWORD),
        dialect: 'mysql'
      });
    return this.connection;
  }
}

module.exports = SequelizeWrapper;