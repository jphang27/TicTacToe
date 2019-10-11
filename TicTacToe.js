// class Board extends Array{
//     constructor(...args);
//     super(args);//When you extend a super(args) MUST have
//     this.player1 = "X";
//     this.player2 = "O";
// }

//Trying the easier route attempt first and hardcoding it in.
const way2Wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], 
                  [6, 4, 2], [2, 5, 8], [1, 4, 7], [0, 3, 6]];

let sizeOfBoard = 9; //size of board is 3x3
let score = 0; //keep track of scoring
let numOfMoves = 0; //check number of moves played
let turns = 0; //see if it's Player 1 or Player 2 turn.

/************************************************************************ */
/***************************TESTING************************************** */
function myFunction() {
    var x = document.getElementById("demo");
    if (x.innerHTML === "X ") {
      x.innerHTML = "X";
    } else {
      x.innerHTML = "O";
    }
  }
/************************************************************************ */
/************************************************************************ */
//Used for testing
function myFunction(){
    if(document.getElementById("1").innerHTML === "X"){
      document.getElementById("1").innerHTML = "O"
    }
    else{
      document.getElementById("1").innerHTML = "X"
    }
    // document.getElementById("1").innerHTML = "X";
}