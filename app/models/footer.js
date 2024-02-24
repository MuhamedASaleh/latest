

const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

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
    timestamps: true, // Enable automatic management of createdAt and updatedAt
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',

});

module.exports = Footer;
