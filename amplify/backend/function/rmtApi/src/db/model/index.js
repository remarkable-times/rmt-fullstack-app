const initUser = require('./User');
const initNewsletter = require('./Newsletter');


module.exports = function (sqlizeConn) {

  const User = initUser(sqlizeConn);
  const Newsletter = initNewsletter(sqlizeConn);

  // relationships
  User.belongsToMany(Newsletter, { through: 'UserNewsletter' });
  Newsletter.belongsToMany(User, { through: 'UserNewsletter' });

  return {
    User,
    Newsletter
  };
};


