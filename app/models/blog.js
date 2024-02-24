

const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Blog = sequelize.define('blogs', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  }
  ,
  image: {
    type: DataTypes.STRING,
    allowNull: true ,

  }
},
  {

    timestamps: true, // Enable automatic management of createdAt and updatedAt
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
    
  }

);

module.exports = Blog;
