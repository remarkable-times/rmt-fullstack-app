
const varNames = require('../enum/envEnum');

module.exports = class SequelizeWrapper {
  constructor(Sequelize, envSvc) {
    this.sequelizeLib = Sequelize;
    this.envSvc = envSvc;
  }

  async createConnection() {
    console.log('db host is: ');
    console.log(this.envSvc.get(varNames.DB_HOST));
    return new this.sequelizeLib(
      {
        host: this.envSvc.get(varNames.DB_HOST),
        database: 'RMT_DB',
        username: this.envSvc.get(varNames.DB_USER),
        password: this.envSvc.get(varNames.DB_PASSWORD),
        dialect: 'mysql'
      });
  }

};