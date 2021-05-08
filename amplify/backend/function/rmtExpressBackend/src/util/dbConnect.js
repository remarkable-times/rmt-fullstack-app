require('dotenv').config();
const SecretsManager = require('aws-sdk/clients/secretsmanager')
const secretsManager = new SecretsManager();
const mysql = require('mysql2/promise');

let connection = null;

async function getCachedDbConnection() {

  // const secret = await secretsManager.getSecretValue({ SecretId: process.env.RMT_CLUSTER_SECRET_NAME }).promise()
  if (connection != null) {
    console.log("re-using cached connection");
    return connection;
  }
  if (connection == null) {
    console.log("connection not exits, CREATING");
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: "RMT_DB",
    });
    return connection;
  }

}

module.exports = getCachedDbConnection;





