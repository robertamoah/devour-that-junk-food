// * Express
// * `burger.js`




const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();


router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var burgObject = {
            burgers : data
        };
        console.log(burgObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne([
        "name", "devoured"
    ],[req.body.name, req.body.devoured], function(result) {
        res.json({id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res) {
    burger.updateOne({
        devoured: req.body.devoured
    }, function(result) {
        result.json();
    });
});

module.exports = router;