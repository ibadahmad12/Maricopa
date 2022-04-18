const db = require("../models");
const { campaign, answer } = require("../models");
const association = require("../../server");
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
   if (!req.body?.title) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
   }

   const newCampaign = {
      title: req.body.title,
      description: req.body.description,
      scheduleDate: req.body.scheduleDate,
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
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err.message || "Some error occurred while creating the Campaign." }));
};

exports.findAll = (req, res) => {
   campaign
      .findAll({
         order: [["scheduleDate", "DESC"]],
         include: {
            association: "questions",
            include: {
               association: "answers"
            }
         }
      })
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err.message || "Error retrieving Campaigns" }));
};

exports.findOne = (req, res) => {
   const { id } = req.params;

   campaign
      .findOne({
         include: {
            association: "questions",
            where: {
               campaignID: { [Op.eq]: parseInt(id) }
            },
            include: {
               association: "answers"
            }
         }
      })
      .then((data) => {
         if (data) res.send(data);
         else res.status(404).send({ message: `Cannot find Campaign with id of ${id}.` });
      })
      .catch((err) => res.status(500).send({ message: err.message ?? "Error retrieving Campaign with id of " + id }));
};

exports.findRecent = (_, res) => {
   campaign
      .findAll({
         limit: 1,
         order: [["scheduleDate", "DESC"]]
      })
      .then((data) => {
         if (data) res.send({ id: data[0].campaignID });
         else res.status(404).send({ message: `No recent campaign found` });
      })
      .catch((err) => res.status(500).send({ message: err.message ?? "Error retrieving recent campaign" }));
};

exports.update = async (req, res) => {
   const requests = req.body.questions.map(
      async ({ questionID, optionSelected }) => await answer.increment({ optionCount: 1 }, { where: { [Op.and]: [{ questionID }, { optionName: optionSelected }] } })
   );

   Promise.all(requests)
      .then((data) => {
         const unresolvedReq = data.map((response, index) => {
            if (response[0][1] === 0) return index;
         });

         if (!unresolvedReq.filter((e) => e !== undefined).length) res.status(200).send({ message: "Campaign was updated successfully." });
         else
            res.status(404).send({
               message: `Question against of ${req.body.questions[unresolvedReq.filter((e) => e !== undefined)[0]].questionID} was not found!`
            });
      })
      .catch((err) => res.status(500).send({ message: err.message || "Error updating Campaign with id of " + id }));
};
