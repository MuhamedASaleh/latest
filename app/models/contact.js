

const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Contact = sequelize.define('contacts', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    facebook: {
        type: DataTypes.STRING,
        allowNull: true
    },
    instagram: {
        type: DataTypes.STRING,
        allowNull: true
    }, linkedin: {
        type: DataTypes.STRING,
        allowNull: true
    }, whatsapp: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: true, // Enable automatic management of createdAt and updatedAt
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',

});

module.exports = Contact;
