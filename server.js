const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8081;
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//parse application/json
app.use(bodyParser.json());

//Sets handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//inport routes and give the server access to them.
var routes = require("./controllers/controller");
app.use(routes);

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT)
});