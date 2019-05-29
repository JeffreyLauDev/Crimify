
const searchesController = require("../controllers").searches;
const usersController = require("../controllers").users;

module.exports = app => {
  app.get("/search", usersController.jwtCheck, searchesController.search);


};
