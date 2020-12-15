// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

$("#shoot").click(function() { 
  let shoot = $("input").val();
  $("#userChoice").text(shoot);
});

$("#shoot").click(function() { 
  $("#computerChoice").text();
});