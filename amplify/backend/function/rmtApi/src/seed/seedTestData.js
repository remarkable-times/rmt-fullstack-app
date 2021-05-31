
const initModels = require('../db/model');

module.exports = async function (sqlizeConn) {
  const Models = initModels(sqlizeConn);

  // await sqlizeConn.sync({ force: true });

  const nl = await Models.Newsletter.create({
    id: 'f2a88e00-c225-11eb-9c2f-0242ac130003',
    name: 'morning briefing',
    url: 'https://static.nytimes.com/email-content/NN_sample.html?action=click&module=nl-index-see-the-latest'
  });

  const user = await Models.User.create({
    id: 'a3cd907b-c225-11eb-9c2f-0242ac130003',
    firstName: 'Brian'
  });

  await nl.addUser(user);


};