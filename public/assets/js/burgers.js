$(function(){
	$(".change-devour").on("click", function(event){
		console.log("this was triggered!");

		var id = $(this).data("id");
		var newdevour = $(this).data("newdevour");

		var newDevourState = {
			devoured: true
		};

		$.ajax("/api/burgers" + id, {
			method: "PUT",
			data: newDevourState
		}).then(function(){
			location.reload();
		});
	});

	$(".create-burger").on("submit", function(event){
		console.log("create burger triggered!");
		
		event.preventDefault();

		var newBurger = {
			burger_name: $("#add-burger").val().trim();
		};

		$.ajax("/api/burgers", {
			method: "POST",
			data: newBurger
		}).then(function(){
			location.reload();
		});
	});
});