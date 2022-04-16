const { Sequelize, DataTypes } = require("sequelize");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = require("../config/db.config");

db.sequelize
   .authenticate()
   .then(() => console.log("Connection has been established successfully."))
   .catch((error) => console.error("Unable to connect to the database:", error));

db.campaign = require("./campaign.model.js")(db.sequelize, DataTypes);
db.question = require("./question.model.js")(db.sequelize, DataTypes);
db.answer = require("./answer.model.js")(db.sequelize, DataTypes);

module.exports = db;
