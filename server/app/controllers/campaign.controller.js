const db = require("../models");
const Campaign = db.campaign;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const campaign = {
        title: req.body.title,
        description: req.body.description,
        noOfQuestions: req.body.noOfQuestions
    };

    Campaign.create(campaign)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Campaign."
            });
        });
};
