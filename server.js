var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var router = require("./app/routing/htmlRoutes");
app.use("/", router);

var router = require("./app/routing/apiRoutes");
app.use("/", router);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
