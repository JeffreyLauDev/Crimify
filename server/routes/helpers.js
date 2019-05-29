const helpersController = require("../controllers").helpers;
module.exports = app => {
  app.get("/offences", helpersController.offences);

  app.get("/areas", helpersController.areas);
  app.get("/ages", helpersController.ages);
  app.get("/genders", helpersController.genders);
  app.get("/years", helpersController.years);

};
