

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');
try {

  const About = sequelize.define('abouts', {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    

  } , 
  {
    timestamps: true,
  }
  );

  module.exports = About;
} catch (error) {
  console.error('error happen in creating about table', error)
}


