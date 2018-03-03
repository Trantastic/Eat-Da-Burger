var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3036;

var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controller/burger_controller.js");

app.use("/", routes);

app.listen(PORT);