

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

try {
    
    const Footer = sequelize.define('footers', {
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
        items: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        timestamps: true
        
    });
    
    module.exports = Footer;
    
} catch (error) {
    console.error('error happen in creating footer table', error)
}