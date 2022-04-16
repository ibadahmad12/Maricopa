const { Sequelize } = require("sequelize");
require("dotenv").config();

module.exports = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASSWORD, {
   host: process.env.HOST,
   dialect: "mysql",
   operatorsAliases: false,
   port: 3306,
   dialectOptions: {
      connectTimeout: 60000
   }
});
