const router = require('express').Router();
const getModels = require('../db/model');

module.exports = function getApiRouterPath(sqlizeConn) {
  router.get('/', async (req, res, next) => {
    console.log('\n you hit the get route');

    const User = getModels(sqlizeConn).User;
    const Newsletter = getModels(sqlizeConn).Newsletter;

    const userWithNls = await User.findAll({
      include: Newsletter
    });

    console.log('\n ****** QUERY RESULT IS: ');
    console.log(userWithNls);

    res.json({
      success: 'get call succeed!',
      data: 'some data...',
      url: req.url
    });
  });
  return router;
};


