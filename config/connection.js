var mysql = require("mysql");

var connection = mysql.createConnection({
	port: 8080,
	host: "localhost",
	user: "root",
	password: "",
	database: "burgers_db"
});

connection.connect(function(err){
	if(err){
		console.error("Error occurred: " + err.stack);
		return;
	}
	console.log("Connected as ID " + connection.threadID);
});

module.exports = connection;