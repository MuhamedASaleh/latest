

const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const ContactMessage = sequelize.define('contactMessages', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
    ,
    firstName: {
        type: DataTypes.STRING,
        allowNull: true
    }
    ,
    lastName: {
        type: DataTypes.STRING,
        allowNull: true
    }
    , phone: {
        type: DataTypes.STRING,
        allowNull: true
    }
    , email: {
        type: DataTypes.STRING,
        allowNull: true
    }
    , subject: {
        type: DataTypes.STRING,
        allowNull: true
    }
    , message: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: true, // Enable automatic management of createdAt and updatedAt
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',

});

module.exports = ContactMessage;
