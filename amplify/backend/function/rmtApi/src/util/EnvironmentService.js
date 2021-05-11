require('dotenv').config();
const varNames = require('../enum/envEnum');

module.exports = class EnvironmentService {
  constructor(secretsManager) {
    this.isLocal = process.env.IS_LOCAL;
    this.secretsManager = secretsManager;
    this.varMap = {};
  }

  async init() {
    // * LOCAL SCENARIO
    if (this.isLocal) {
      console.log('initializing local env setup');
      for (const varName in varNames) {
        this.varMap[varName] = process.env[varName];
      }
      return this;
    }
    // * NON LOCAL SCENARIO
    const dbSecretsRes = await this.secretsManager.getSecretValue(
      { SecretId: process.env.RMT_CLUSTER_SECRET_NAME }
    ).promise();
    // set DB properties on typed varMap
    const secretsMap = JSON.parse(dbSecretsRes.SecretString);
    this.varMap[varNames.DB_HOST] = secretsMap.host;
    this.varMap[varNames.DB_PASSWORD] = secretsMap.password;
    return this;
  }

  get(varName) {
    if (!varNames[varName]) {
      throw new Error(varName + ' not in variable names enum');
    }
    const varValue = this.varMap[varName];
    if (varValue === undefined) {
      throw new Error('variable value not defined for ' + varName);
    }
    return varValue;
  }
};