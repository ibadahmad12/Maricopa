const { Sequelize, DataTypes } = require("sequelize");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = require("../config/db.config");

db.campaign = require("./campaign.model.js")(db.sequelize, DataTypes);
db.question = require("./question.model.js")(db.sequelize, DataTypes);
db.answer = require("./answer.model.js")(db.sequelize, DataTypes);

module.exports = db;
