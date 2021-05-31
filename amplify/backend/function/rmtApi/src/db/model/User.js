const { DataTypes } = require('sequelize');

module.exports = function (sqlizeConn) {
  return sqlizeConn.define('User', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });
};

