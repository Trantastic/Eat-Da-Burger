var connection = require("connection.js");

var orm = {
	selectAll: function(tableName, cb){
		var query = "SELECT * FROM " + tableName + ";";

		connection.query(queryString, function(err, res){
			if(err) throw err;
			cb(res);
		});
	},

	insertOne: function(tableName, colName, value, cb){
		var query = "INSERT INTO " + tableName;
		query += " (" + colName + ") ";
		query += "VALUES " + "(" + value + ")" + ";";

		// debugger
		console.log(query);

		connection.query(query, function(err, res){
			if(err) throw err;
			cb(res);
		});
	},

	updateOne: function(tableName, updateVal, condition, cb){
		var query = "UPDATE " + tableName;
		query += " SET " + updateVal;
		query += " WHERE " + condition + ";";

		connection.query(query, function(err, res){
			if(err) throw err;
			cb(res);
		});
	}
};
module.exports = orm;