$(document).ready(function(){

		//  jquery function which will highlight a selector + event + event handler listeining for user selection

		$("a").on("click", function(){
			if($(this).attr("id") === "rock"){
				// do stuff
			}else if($(this).attr("id") === "paper"){
				// do stuff
			}else if ($(this).attr("id") === "scissors"){
				// do stuff
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
	}

	function matchup(){
		//  eventually matching up the user against the computer option
	}


})