var orm = require("../config/orm.js");

var burger = {
	selectAll: function(cb){
		orm.selectAll("burgers", function(res){
			cb(res);
		});
	},
	insertOne: function(colName, value, cb){
		orm.insertOne("burgers", colName, value, function(res){
			cb(res);
		});
	},
	updateOne: function(updateVal, condition, cb){
		orm.updateOne("burgers", updateVal, condition, function(res){
			cb(res);
		});
	}
};

// Export for controller burger_controller.js
module.exports = burger;