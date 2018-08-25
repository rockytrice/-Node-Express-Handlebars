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
    insertOne: function(table,cols,vals,callback){
var queryString = "INSERT INTO " + table;
queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";
    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      callback(result);
    });
    }






}