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
		})


	function compChoice(){
		// function which will determine what the computer has to choose againt the user
		// updated choice options to randomize from 1-3 inclusive
		var choice = Math.ceil(Math.random()*3);

		if(choice === 1) {
			// do some stuff

		}else if (choice === 2){
			// do some stuff

		}else if (choice ===3){

			// do some stuff
		}


	}

	function matchup(){
		//  eventually matching up the user against the computer option
	}


})