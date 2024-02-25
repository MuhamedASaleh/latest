

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

try {

    const Contact = sequelize.define('contacts', {
        // Model attributes are defined here

        name: {
            type: DataTypes.STRING,
            allowNull: true
        }
        ,email: {
            type: DataTypes.STRING,
            allowNull: true
        }
        ,subject: {
            type: DataTypes.STRING,
            allowNull: true
        }
        ,message: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
        {
            timestamps: true

        });

    module.exports = Contact;




} catch (error) {
    console.error('error happen in creating contact table', error)
}

