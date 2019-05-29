var createError = require('http-errors');
var express = require('express');
var path = require('path');
const Cors = require("cors");
var bodyParser = require('body-parser');
var logger = require('morgan');
const helmet = require('helmet')

var app = express();

app.use(helmet())
app.use((req, res, next) => {
  res.append("Access-Control-Expose-Headers", "X-Total-Count");
  res.header("Access-Control-Allow-Origin", "*");


  next();
});

// use CORS
app.use(Cors());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(logger("dev"));


app.use(express.static(path.join(__dirname, 'public')));


require("./routes")(app);

app.get("*", (req, res) =>
  res.status(200).send({
    message: "No responsing API existing"
  })
);


module.exports = app;
