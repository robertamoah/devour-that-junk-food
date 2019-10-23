// * `selectAll()`
// * `insertOne()`
// * `updateOne()`
var connection = require("..config/connection.js");

var orm = {
  selectAll: (tableInput, colToSearch, valOfCol) => {
    var queryString = "SELECT FROM ??";
    connection.query(queryString, [whatToSelect, tableInput,], (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne: (tableInput, burger_name, devoured) => {
    var queryString = "INSERT INTO ?? VALUES ?? ??";
    console.log(queryString);
    connection.query(queryString[tableInput, burger_name, devoured], (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: (whatToSelect, tableInput, changesDesired) => {
    var queryString ="UPDATE ?? SET ?? WHERE ??";
    connection.query(queryString[whatToSelect, tableInput, changesDesired],(err, result) => {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};

module.exports = orm;
