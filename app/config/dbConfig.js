const Sequelize  = require('sequelize');

const sequelize = new Sequelize('codeclick', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
  });
  

module.exports = sequelize;