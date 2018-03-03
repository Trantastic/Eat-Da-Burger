var express = require("express");
var router = express.Router();
var burger = require("../model/burger.js");

router.get("/", function(req, res){
	burger.selectAll(function(data){
		var hbsObject = {
			burgers: data
		};
		res.render("index", hbsObject);
	});
});

router.post("/api/burgers", function(req, res){
	burger.insertOne(["burger_name"],[req.body.burger_name],
	function(data){
		console.log("post", req.body);
		res.json({id: data.insertId});
	});
});

router.put("/api/burgers/:id", function(req, res){
	var condition = "id = " + req.params.id;

	console.log("controller", req.body.id);
	console.log("controller", req.body.devoured);

	burger.updateOne({
		devoured: true
	}, condition, function(data){
		if(data.changedRows == 0){
			return res.status(404).end();
		}
		else{
			res.status(200).end();
		}
	});
});


module.exports = router;