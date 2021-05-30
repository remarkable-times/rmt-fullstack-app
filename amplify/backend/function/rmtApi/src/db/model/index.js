const initTeam = require('./Team');


module.exports = function (sqlizeConn) {
  return {
    Team: initTeam(sqlizeConn)

  };
};


