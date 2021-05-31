const lambdaHandler = require('./index').handler;
const expect = require('chai').expect;


describe('#index.js', () => {
  it('initializes correctly', async (done) => {
    const mockInput = getMockGetInput();
    const res = await lambdaHandler(mockInput, mockInput.requestContext);
    // console.log(res);
    expect(res.statusCode).equals(200);
    process.exit(0);
  });

  xit('synchronizes the db when lambda called with dbSync event', async () => {
    const mockInput = {
      eventType: 'seed'
    };
    await lambdaHandler(mockInput);
    process.exit(0);
  });
});

function getMockGetInput() {
  return {
    'resource': '/api',
    'path': '/api',
    'httpMethod': 'GET',
    'headers': {
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.5',
      'cache-control': 'max-age=0',
      'CloudFront-Forwarded-Proto': 'https',
      'CloudFront-Is-Desktop-Viewer': 'true',
      'CloudFront-Is-Mobile-Viewer': 'false',
      'CloudFront-Is-SmartTV-Viewer': 'false',
      'CloudFront-Is-Tablet-Viewer': 'false',
      'CloudFront-Viewer-Country': 'US',
      'Host': 'ghftx4oo0f.execute-api.us-east-1.amazonaws.com',
      'upgrade-insecure-requests': '1',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:88.0) Gecko/20100101 Firefox/88.0',
      'Via': '2.0 777c0716c0ef8010208c3559195306d7.cloudfront.net (CloudFront)',
      'X-Amz-Cf-Id': 'YHYcAtLy_ieUEUqS6RB_sEJ89hfQGq7Md3Qxox1gcRtH8jVH7xx_cA==',
      'X-Amzn-Trace-Id': 'Root=1-609a578e-31afce172f5111181db0e929',
      'X-Forwarded-For': '68.129.230.89, 52.46.46.72',
      'X-Forwarded-Port': '443',
      'X-Forwarded-Proto': 'https'
    },
    'multiValueHeaders': {
      'Accept': [
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
      ],
      'Accept-Encoding': [
        'gzip, deflate, br'
      ],
      'Accept-Language': [
        'en-US,en;q=0.5'
      ],
      'cache-control': [
        'max-age=0'
      ],
      'CloudFront-Forwarded-Proto': [
        'https'
      ],
      'CloudFront-Is-Desktop-Viewer': [
        'true'
      ],
      'CloudFront-Is-Mobile-Viewer': [
        'false'
      ],
      'CloudFront-Is-SmartTV-Viewer': [
        'false'
      ],
      'CloudFront-Is-Tablet-Viewer': [
        'false'
      ],
      'CloudFront-Viewer-Country': [
        'US'
      ],
      'Host': [
        'ghftx4oo0f.execute-api.us-east-1.amazonaws.com'
      ],
      'upgrade-insecure-requests': [
        '1'
      ],
      'User-Agent': [
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:88.0) Gecko/20100101 Firefox/88.0'
      ],
      'Via': [
        '2.0 777c0716c0ef8010208c3559195306d7.cloudfront.net (CloudFront)'
      ],
      'X-Amz-Cf-Id': [
        'YHYcAtLy_ieUEUqS6RB_sEJ89hfQGq7Md3Qxox1gcRtH8jVH7xx_cA=='
      ],
      'X-Amzn-Trace-Id': [
        'Root=1-609a578e-31afce172f5111181db0e929'
      ],
      'X-Forwarded-For': [
        '68.129.230.89, 52.46.46.72'
      ],
      'X-Forwarded-Port': [
        '443'
      ],
      'X-Forwarded-Proto': [
        'https'
      ]
    },
    'queryStringParameters': null,
    'multiValueQueryStringParameters': null,
    'pathParameters': null,
    'stageVariables': null,
    'requestContext': {
      'resourceId': '7yscvo',
      'resourcePath': '/api',
      'httpMethod': 'GET',
      'extendedRequestId': 'fKKeVE1moAMFUJA=',
      'requestTime': '11/May/2021:10:08:14 +0000',
      'path': '/featnew/api',
      'accountId': '466357709346',
      'protocol': 'HTTP/1.1',
      'stage': 'featnew',
      'domainPrefix': 'ghftx4oo0f',
      'requestTimeEpoch': 1620727694883,
      'requestId': '6771c25e-a443-4141-bdd7-320dedf84534',
      'identity': {
        'cognitoIdentityPoolId': null,
        'accountId': null,
        'cognitoIdentityId': null,
        'caller': null,
        'sourceIp': '68.129.230.89',
        'principalOrgId': null,
        'accessKey': null,
        'cognitoAuthenticationType': null,
        'cognitoAuthenticationProvider': null,
        'userArn': null,
        'userAgent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:88.0) Gecko/20100101 Firefox/88.0',
        'user': null
      },
      'domainName': 'ghftx4oo0f.execute-api.us-east-1.amazonaws.com',
      'apiId': 'ghftx4oo0f'
    },
    'body': null,
    'isBase64Encoded': false
  };
}