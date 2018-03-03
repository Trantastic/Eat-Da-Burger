$(function(){
	$(".change-devour").on("click", function(event){
		

		var id = $(this).data("id");
		var newdevour = $(this).data("newdevour");

		console.log(id);
		console.log(newdevour);

		var newDevourState = {
			devoured: newdevour
		};

		$.ajax("/api/burgers" + id, {
			method: "PUT",
			data: newDevourState
		}).then(function(){
			location.reload();
		});
	});

	$(".create-burger").on("submit", function(event){
		event.preventDefault();

		var newBurger = {
			burger_name: $("#add-burger").val().trim()
		};

		$.ajax("/api/burgers", {
			method: "POST",
			data: newBurger
		}).then(function(){
			location.reload();
		});
	});
});