const { DataTypes } = require('sequelize');

module.exports = function (sqlizeConn) {
  return sqlizeConn.define('Team', {
    teamName: DataTypes.STRING,
    jerseyColor: DataTypes.STRING,
  });
};
