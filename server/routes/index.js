
module.exports = app => {
  require("./authentications")(app);
  require("./search")(app);
  require("./helpers")(app);

};
