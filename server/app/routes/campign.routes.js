module.exports = (app) => {
    const campaigns = require("../controllers/campaign.controller.js");
    var router = require("express").Router();

    app.use("/api/campaigns", router);

    router.post("/", campaigns.create);
};
