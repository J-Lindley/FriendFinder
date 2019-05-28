var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express()
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

app.use(express.static("app/public"));

require("../app/routing/apiRouses.js")(app);
require("../app/routing/htmlRouses.js")(app);


app.listen(port, () => console.log("listening on port %s", port));
