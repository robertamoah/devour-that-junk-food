// import `orm.js` into `burger.js`

const orm = require("../db/config/orm.js");

var burger = {
    selectAll: function(whatToSelect, tableInput, cb) {
        orm.selectAll(whatToSelect, tableInput, function(res) {
            cb(res);
        });
    },
    insertOne: function(tableInput, burger_name, devoured, cb) {
        orm.insertOne(tableInput, burger_name, devoured, function(res) {
            cb(res);
        });
    },
    updateOne: function(whatToSelect, tableInput, changesDesired, cb) {
        orm.updateOne(whatToSelect, tableInput, changesDesired, function(res) {
            cb(res);
        });
    }
    
};
module.exports = burger;
