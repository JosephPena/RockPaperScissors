$(document).ready(function(){

//jquery click event for anchor tags with specific attributes of id.  Evaluating for rock,paper,scissors
	$("a").on("click", function(){
		if($(this).attr("id") === "rock"){
			matchUp("rock");
		}else if($(this).attr("id") === "paper"){
			matchUp("paper");
		}else if ($(this).attr("id") === "scissors"){
			matchUp("scissors");
		}
	});

//submit button to retrieve value of minutes
	$(".submit-button").on("click", function(){
		var value = $(".minutes").val();
			if(value > 0){
				//create a timer function later on.
			}else{
				alert("Hi!, Please Make A Minutes Selection");
			}
	});

//Computer Function that randomly selects a value between 1-3.  Tied to a rock,paper,scissor option
	function choice(){
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
	function matchUp(userChoice){
		var compChoice = choice();
		var userWin = "You Win!";
		var userLose = "You Lost!";
		var userTie = "It's a tie!";

		if(userChoice === "rock"){
			alert(compChoice === "rock" ? userTie : compChoice === "paper" ? userLose : userWin);
		}else if (userChoice === "paper"){
			alert(compChoice === "rock" ? userTie : compChoice === "paper" ? userLose : userWin);
		}else if (userChoice === "scissors") {
			alert(compChoice === "rock" ? userTie : compChoice === "paper" ? userLose : userWin);
		}
	};


});