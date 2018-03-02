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
			if(err) throw err;
			cb(res);
		});
	},

	insertOne: function(tableName, colName, value, cb){
		var query = "INSERT INTO " + tableName;
		query += " (";
		query += colName.toString();
		query += ") ";
		query += "VALUES (";
		query += printQuestionMarks(value.length); 
		query += ") ";

		connection.query(query, function(err, res){
			if(err) throw err;
			cb(res);
		});
	},

	updateOne: function(tableName, updateVal, condition, cb){
		var query = "UPDATE " + tableName;
		query += " SET ";
		query += obToSql(updateVal);
		query += " WHERE "; 
		query += condition;

		connection.query(query, function(err, res){
			if(err) throw err;
			cb(res);
		});
	}
};

module.exports = orm;
