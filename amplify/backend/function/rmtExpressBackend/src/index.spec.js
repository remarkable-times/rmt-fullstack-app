
const lamdaHandler = require('./index').handler
const expect = require('chai').expect

describe('Array', function () {
    it('saves a db connection', async() => {
        const testInput = getApiGevent()
        const response = await lamdaHandler(testInput, {})
        // console.log(response)
        expect(response.statusCode).equal(200)
        process.exit(0)
    })

});



function getApiGevent() {
    return {
        "body": "eyJ0ZXN0IjoiYm9keSJ9",
        "resource": "/{proxy+}",
        "path": "/api",
        "httpMethod": "GET",
    }
}
