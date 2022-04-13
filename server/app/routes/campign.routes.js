module.exports = (app) => {
   const campaigns = require("../controllers/campaign.controller.js");
   var router = require("express").Router();

   router.get("/", campaigns.findAll);

   router.get("/:id", campaigns.findOne);

   router.post("/", campaigns.create);

   router.put("/:campaignID", campaigns.update);

   app.use("/api/campaigns", router);
};
