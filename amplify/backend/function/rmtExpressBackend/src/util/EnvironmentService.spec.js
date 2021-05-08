const EnvironmentService = require('./EnvironmentService')
const SecretsManager = require('aws-sdk/clients/secretsmanager')
const varNames = require('../enum/envEnum')

describe("#EnvironmentService", () => {
    it("initializes local vars if local", async () => {
        const target = new EnvironmentService(new SecretsManager())
        await target.init()
        const dbHost = target.get(varNames.DB_PASSWORD)
        console.log(dbHost);
    })
})