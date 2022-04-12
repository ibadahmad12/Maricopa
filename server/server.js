const express = require("express");
const app = express();
require("./app/config/db.config");

app.use(express.json());

const db = require("./app/models");

// db.campaign.hasMany(db.question, {
//     foreignKey: "campaignID"
// });

// db.question.hasMany(db.answer, {
//     foreignKey: "questionID"
// });

// (async () => {
//     await db.sequelize.sync({ alter: true });
//     console.log("Resynced all Tables");
// })();

app.get("/", (req, res) => {
    res.json({ message: "Welcome to marycopa application." });
});

app.listen(process.env.PORT || 8080);
