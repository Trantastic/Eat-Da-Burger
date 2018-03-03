var connection = require("./connection.js");

// Helper function to assemble ? for mysql
function printQuestionMarks(num){
	var arr = [];

	for(var i = 0; i < num; i++){
		arr.push("?");
	}
	return arr.toString();
}
// Helper function to convert object keys and values for mysql
function obToSql(ob){
	var arr = [];

	for(var key in ob){
		var value = ob[key];

		if(Object.hasOwnProperty.call(ob, key)){
			if(typeof value === "string" && value.indexOf(" ") >= 0){
				value = "'" + value + "'";
			}
			arr.push(key + "=" + value);
		}
	}
	return arr.toString();
}

var orm = {
	selectAll: function(tableName, cb){
		var query = "SELECT * FROM " + tableName + ";";

		connection.query(query, function(err, res){
			console.log(query);

			if(err) throw err;
			cb(res);
		});
	},

	insertOne: function(tableName, colName, value, cb){
    var queryString = "INSERT INTO " + tableName;
    queryString += " (";
    queryString += colName.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(value.length);
    queryString += ") ";

		console.log("insert", queryString);
		connection.query(queryString, value, function(err, res){
			console.log("insert", queryString);
			if(err) throw err;
			cb(res);
		});
	},

	updateOne: function(tableName, updateVal, condition, cb){
		var queryString = "UPDATE " + tableName;
		queryString += " SET ";
		queryString += obToSql(updateVal);
		queryString += " WHERE "; 
		queryString += condition;

		console.log("update", queryString);
		connection.query(queryString, function(err, res){
			console.log("update", queryString);
			if(err) throw err;
			cb(res);
		});
	}
};
// Export for model burger.js
module.exports = orm;
