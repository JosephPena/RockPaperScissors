$(document).ready(function(){

//jquery click event for anchor tags with specific attributes of id.  Evaluating for rock,paper,scissors
	$("a").on("click", function(){
		if($(this).attr("id") === "rock"){
			console.log("rock");
		}else if($(this).attr("id") === "paper"){
			console.log("paper");
		}else if ($(this).attr("id") === "scissors"){
			console.log("scissors");
		}
	});

//Computer Function that randomly selects a value between 1-3.  Tied to a rock,paper,scissor option
	function compChoice(){
		var choice = Math.ceil(Math.random()*3);
		var result;

		if(choice === 1) {
			result = "rock";
		}else if (choice === 2){
			result = "paper";
		}else if (choice === 3){
			result = "scissors";
		}
		return result;
	};

//matchup function that will eventually challenge user vs computer
	function matchUp(input){
		if(input === "rock"){
			console.log("user eval-rock working")
		}else if (input === "paper"){
			console.log("user eval-paper working")
		}else if (input === "scissors") {
			console.log("user eval-scissors working")
		}
	};


});