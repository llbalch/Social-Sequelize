const { Sequelize, DataTypes, Model } = require('sequelize')

const db = new Sequelize({
    dialect: 'sqlite',
    storage: 'db.sqlite'
});




module.exports = {
    db,
    DataTypes,
    Model
    
}