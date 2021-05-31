
const initModels = require('../db/model');

module.exports = async function (sqlizeConn, lambdaEvent) {
  initModels(sqlizeConn);
  if (lambdaEvent.force == true) {
    console.log('!! force: true specified, dropping all tables and re-creating');
    return sqlizeConn.sync({ force: true });
  }
  if (lambdaEvent.alter == true) {
    console.log('!! alter: true specified, tables may be modified to reflect sequelize setup');
    return sqlizeConn.sync({ alter: true });
  }
  return sqlizeConn.sync();

};