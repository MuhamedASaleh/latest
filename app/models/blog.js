

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');
try {

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
      allowNull: true,

    }
  },
    {

      timestamps: true

    }

  );

  module.exports = Blog;
} catch (error) {
  console.error('error happen in creating blog table', error)
}


