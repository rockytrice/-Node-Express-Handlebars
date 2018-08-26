var express = require("express");

var router = express.Router();

// Import the model (car.js) to use its database functions.
var car = require("../models/car.js");

// creating the routes and setting up logic
// route for selectAll======================================================================================
router.get("/", function (req, res) {
    car.select(function (data) {
        var hbsObject = {
            cars: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    })
})
// insertOne route==========================================================================================================

router.post("/api/cars", function (req, res) {
    car.create(["car_name"], [req.body.name, req.body.purchased], function (result) {
        res.json({
            id: result.insertId
        });
    });
});
// updateOne route===========================================================================================
router.put("/api/cars/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    car.update({
        purchased: req.body.purchased
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
// Exports routes to server.js to use.
module.exports = router;