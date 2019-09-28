var express = require ("express");
var PORT = process.env.PORT || 3000;
var app = express();
var exphbs = require("express-handlebars");

app.use(express.static("public"))

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



// var robert = [
//     {
//         name:"robert poppy",
//         age: "23",
//         height: "6ft"

//     }
// ]
 
app.get("/", (req,res) => {
  
// res.render("index", robert[0] )

})
 











app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });