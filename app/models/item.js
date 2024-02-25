

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

try {
  
  const Item = sequelize.define('items', {
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
    photo: {
      type: DataTypes.STRING,
      allowNull: true ,
      
    }
  },
  {
    
    timestamps: true
    
  }
  
  );
  
  module.exports = Item;
  
} catch (error) {
    console.error('error happen in creating item table', error)
}