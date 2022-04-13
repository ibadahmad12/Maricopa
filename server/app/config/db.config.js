const { Sequelize } = require("sequelize");
require("dotenv").config();

module.exports = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASSWORD, {
   host: process.env.HOST,
   dialect: "mysql",
   operatorsAliases: false,

   pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
   }
});
