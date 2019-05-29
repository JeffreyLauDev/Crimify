const usersController = require("../controllers").users;
module.exports = app => {
  app.post("/register", usersController.register);
  app.post("/login", usersController.login);

};
