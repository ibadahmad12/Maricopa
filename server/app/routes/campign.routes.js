module.exports = (app) => {
    const campaigns = require("../controllers/campaign.controller.js");
    var router = require("express").Router();

    router.post("/", campaigns.create);

    app.use("/api/campaigns", router);
};
