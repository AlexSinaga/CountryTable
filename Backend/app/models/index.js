const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,

    pool: {
        min: dbConfig.pool.min
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.countries = require("./countries.model.js")(sequelize, Sequelize);

module.exports = db;