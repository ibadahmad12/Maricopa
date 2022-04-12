const db = require("../models");
const { question, campaign, answer } = require("../models");
const association = require("../../server");

exports.create = (req, res) => {
    if (!req.body?.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const newCampaign = {
        title: req.body.title,
        description: req.body.description,
        noOfQuestions: req.body.noOfQuestions,
        questions: req.body.questions
    };

    campaign
        .create(newCampaign, {
            include: [
                {
                    association: association.Questions,
                    as: "questions",
                    include: [
                        {
                            association: association.Answers,
                            as: "answers"
                        }
                    ]
                }
            ]
        })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Campaign."
            });
        });
};
