// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var car = {
    selectAll: function (callback) {
        orm.selectAll("cars", function (res) {
            callback(res);
        });
    },
    insertOne: function (cols, vals, callback) {
        orm.insertOne("cars", cols, vals, function (res) {
            callback(res);
        });
    },
    updateOne: function (objColVals, condition,callback){
        orm.updateOne("cars",objColVals,condition,function(res){
            callback(res);
        })
    }

}


module.exports = car;