var letter = "<xletter>X</xletter>";
var scoreX = 0;
var scoreO = 0;
var contCel = 0;

function clique(cell) {
    var selectedCell  = document.getElementById(cell).innerHTML;
    
    
    if (selectedCell == "") {
        document.getElementById(cell).innerHTML = letter;
        winner();
        
        
        if(letter == "<xletter>X</xletter>") {
        
            document.querySelector('.player-order').innerHTML = ("Vez do jogador O");
            letter = "<oletter>O</oletter>";
        
        } else {
         
            document.querySelector('.player-order').innerHTML = ("Vez do jogador X");
            letter = "<xletter>X</xletter>";
       }
    
    }
}

var winneScreen = document.querySelector('.hide');

function winner() {
    const cell1 = document.getElementById('cell-1').innerHTML;
    const cell2 = document.getElementById('cell-2').innerHTML;
    const cell3 = document.getElementById('cell-3').innerHTML;
    const cell4 = document.getElementById('cell-4').innerHTML;
    const cell5 = document.getElementById('cell-5').innerHTML;
    const cell6 = document.getElementById('cell-6').innerHTML;
    const cell7 = document.getElementById('cell-7').innerHTML;
    const cell8 = document.getElementById('cell-8').innerHTML;
    const cell9 = document.getElementById('cell-9').innerHTML;
    
    if (cell1 == "<xletter>X</xletter>" && cell2 == "<xletter>X</xletter>" && cell3 == "<xletter>X</xletter>" ||
    cell4 == "<xletter>X</xletter>" && cell5 == "<xletter>X</xletter>" && cell6 == "<xletter>X</xletter>" ||
    cell7 == "<xletter>X</xletter>" && cell8 == "<xletter>X</xletter>" && cell9 == "<xletter>X</xletter>" ||
    cell1 == "<xletter>X</xletter>" && cell4 == "<xletter>X</xletter>" && cell7 == "<xletter>X</xletter>" ||
    cell2 == "<xletter>X</xletter>" && cell5 == "<xletter>X</xletter>" && cell8 == "<xletter>X</xletter>" ||
    cell3 == "<xletter>X</xletter>" && cell6 == "<xletter>X</xletter>" && cell9 == "<xletter>X</xletter>" ||
    cell1 == "<xletter>X</xletter>" && cell5 == "<xletter>X</xletter>" && cell9 == "<xletter>X</xletter>" ||
    cell7 == "<xletter>X</xletter>" && cell5 == "<xletter>X</xletter>" && cell3 == "<xletter>X</xletter>") {
    
        winneScreen.classList.add("winner");
        document.querySelector('.result').innerHTML = "X é o vencedor";
        document.querySelector('.x-score').innerHTML = (scoreX = scoreX + 1);
   
    } else {
        
        contCel = contCel + 0.5;
    }
    
    if (cell1 == "<oletter>O</oletter>" && cell2 == "<oletter>O</oletter>" && cell3 == "<oletter>O</oletter>" ||
    cell4 == "<oletter>O</oletter>" && cell5 == "<oletter>O</oletter>" && cell6 == "<oletter>O</oletter>" ||
    cell7 == "<oletter>O</oletter>" && cell8 == "<oletter>O</oletter>" && cell9 == "<oletter>O</oletter>" ||
    cell1 == "<oletter>O</oletter>" && cell4 == "<oletter>O</oletter>" && cell7 == "<oletter>O</oletter>" ||
    cell2 == "<oletter>O</oletter>" && cell5 == "<oletter>O</oletter>" && cell8 == "<oletter>O</oletter>" ||
    cell3 == "<oletter>O</oletter>" && cell6 == "<oletter>O</oletter>" && cell9 == "<oletter>O</oletter>" ||
    cell1 == "<oletter>O</oletter>" && cell5 == "<oletter>O</oletter>" && cell9 == "<oletter>O</oletter>" ||
    cell7 == "<oletter>O</oletter>" && cell5 == "<oletter>O</oletter>" && cell3 == "<oletter>O</oletter>") {
        
        winneScreen.classList.add("winner");
        document.querySelector('.result').innerHTML = "O é o vencedor";
        document.querySelector('.o-score').innerHTML = (scoreO = scoreO + 1);
   
    } else {
        
        contCel = contCel + 0.5;
    }
    
    if (contCel == 9) {
        winneScreen.classList.add("winner");
        document.querySelector('.result').innerHTML = "Empate";
    }
}

function restart() {
    winneScreen.classList.remove("winner");
    contCel = 0;
    
    document.getElementById('cell-1').innerHTML = "";
    document.getElementById('cell-2').innerHTML = "";
    document.getElementById('cell-3').innerHTML = "";
    document.getElementById('cell-4').innerHTML = "";
    document.getElementById('cell-5').innerHTML = "";
    document.getElementById('cell-6').innerHTML = "";
    document.getElementById('cell-7').innerHTML = "";
    document.getElementById('cell-8').innerHTML = "";
    document.getElementById('cell-9').innerHTML = "";
}
