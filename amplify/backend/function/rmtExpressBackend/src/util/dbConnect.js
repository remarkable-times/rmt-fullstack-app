
const mysql = require('mysql2/promise');
const varNames = require('../enum/envEnum')

// declare global variable which can be uses across lambda invocations
let connection = null;

async function getCachedDbConnection(envSvc) {
  if (connection != null) {
    console.log("re-using cached connection");
    return connection;
  }
  if (connection == null) {
    console.log("connection not exits, CREATING");
    console.log("connecting to host: " + envSvc.get(varNames.DB_HOST));
    connection = await mysql.createConnection({
      host: envSvc.get(varNames.DB_HOST),
      user: envSvc.get(varNames.DB_USER),
      password: envSvc.get(varNames.DB_PASSWORD),
      database: "RMT_DB",
    });
    return connection;
  }

}

module.exports = getCachedDbConnection;





