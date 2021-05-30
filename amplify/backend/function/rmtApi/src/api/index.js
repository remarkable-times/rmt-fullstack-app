const router = require('express').Router();
const getModels = require('../db/model');

module.exports = function getApiRouterPath(sqlizeConn) {
  router.get('/', async (req, res, next) => {
    console.log('\n you hit the get route');

    const Team = getModels(sqlizeConn).Team;

    const teams = await Team.findAll();

    console.log('\n ****** QUERY RESULT IS: ');
    console.log(teams);


    res.json({
      success: 'get call succeed!',
      data: 'connection happened',
      url: req.url
    });
  });
  return router;
};


