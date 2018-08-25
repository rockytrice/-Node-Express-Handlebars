// Import MySQL connection.
var connection = require("../config/connection.js");



// Object for all our SQL statement functions.
var orm = {
    selectAll: function(tableInput, callback) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        callback(result);
      });
    },






}