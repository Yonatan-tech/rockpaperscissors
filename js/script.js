// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

let computerChoice = "";

//GLOBAL VARIABLES
/* global $ */

$("#shoot").click(function() { 
  let shoot = $("input").val();
  $("#userChoice").text(shoot);
});

$("#shoot").click(function() { 
  $("#computerChoice").text();
});



$("#shoot").click(function() {
    let computer = Math.random();
    console.log(computer);
    if (computer > 0.666) {
      computerChoice = "paper";
        $(".text").text("paper");
                                               
    } else if ( computer > 0.333){ 
      computerChoice = "scissors";
      $(".text").text("scissors"); 
                                                                                                     
    } else {
      computerChoice = "rock";
        $(".text").text("rock");
    }
	
  $("#computerChoice").html(computerChoice);
  
});
