const express = require("express")
const items = require("../models/items")
const router = express.Router()

router.get("/", (req, res) => {
    items.all((data) => {
        var hbsObject = {
            items: data
        }
        console.log(hbsObject)
        res.render("index", hbsObject)
    })
})

router.post("/api/items", (req, res) => items.create(req.body.name, (data) => res.json({id: data.insertID})))

router.put("/api/items/:id", (req, res) => {
    var condition = "id = " + req.params.id
    console.log("condition: " + condition)
    console.log(req.body.devoured)
    
    item.update(req.body.devoured, condition, (result) => {
        if (result.changedRows == 0) {
            return res.status(404).end()
        }
        else{
            res.status(200).end()
        }
    })
})

module.exports = router