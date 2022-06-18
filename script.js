 var player1 = "PLAYER1";
 var player2 = "Player1";

function add_user() {
 player1 = document.getElementById("player1_input_name").value;
 player2 = document.getElementById("player2_input_name").value;

 console.log(player1);

 localStorage.setItem("player1_input_name" , player1);
 localStorage.setItem("player2_input_name" , player2);

 window.location = "gamepage.html";
}