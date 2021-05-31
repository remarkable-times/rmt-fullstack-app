const { DataTypes } = require('sequelize');

module.exports = function (sqlizeConn) {
  return sqlizeConn.define('Newsletter', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
