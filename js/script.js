// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

let computerChoice = "";

//GLOBAL VARIABLES
/* global $ */

$("#shoot").click(function() { 
  let shoot = $("input").val();
  $("#userChoice").text(shoot);
  
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

function getComputerChoice(){
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
}}



let userChoice = '';

$("#rock").click(function(){
  let choice = 'rock';
  shoot(choice);
});

$("#paper").click(function(){
  let choice = 'paper';
  shoot(choice);
});

$("#scissors").click(function(){
  let choice = 'scissors';
  shoot(choice);
});

function shoot(choice) {

  let outcome = whoWins(choice, computerChoice);
  if (outcome == 'player1'){
    $("#result").html("You win!");
  } else if (outcome == 'player2') {
    $("#result").html("Computer Wins");
  } else if (outcome == 'tie') {
    $("#result").html("Tie");
  }      
  }

function whoWins(player1Choice, player2Choice) {
  if (player1Choice == 'rock'){
    if (player2Choice == 'rock') return 'tie';
    if (player2Choice == 'paper') return 'player2';
    if (player2Choice == 'scissors') return 'player1';  
  } 
  if (player1Choice == 'paper'){
    if (player2Choice == 'rock') return 'player1';
    if (player2Choice == 'paper') return 'tie';
    if (player2Choice == 'scissors') return 'player2';
  } 
  if (player1Choice == 'scissors'){
    if (player2Choice == 'rock') return 'player2';
    if (player2Choice == 'paper') return 'player1';
    if (player2Choice == 'scissors') return 'tie';
  } 
}


//function computerResult()
//{
 // var result;
 // if (userChoice === computerChoice){
 //  $("#result").html('Tie!');
 // }
  
  
  
  
  
  
//}