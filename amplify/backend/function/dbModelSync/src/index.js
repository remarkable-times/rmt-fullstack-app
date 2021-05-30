
const { Sequelize, DataTypes, Model } = require('sequelize');
const getModels = require('rmt-models').


exports.handler = async (event) => {

  const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: 'mysql'
    });

    

  // console.log("synchronizing models");
  // const models = getModels(sequelize);

  // await sequelize.sync()

};

exports.handler()


