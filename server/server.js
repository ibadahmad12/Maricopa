const express = require("express");
const app = express();
require("./app/config/db.config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./app/routes/campign.routes")(app);

const db = require("./app/models");

exports.Questions = db.campaign.hasMany(db.question, {
   foreignKey: { name: "campaignID", as: "questions" }
});

exports.Answers = db.question.hasMany(db.answer, {
   foreignKey: { name: "questionID", as: "answers" }
});

// db.sequelize.sync({ force: true }).then(() => console.log("Resynced all Tables"));

app.get("/", (req, res) => {
   res.json({ message: "Welcome to maricopa application on EC2 instance." });
});

app.listen(process.env.PORT || 8080);
