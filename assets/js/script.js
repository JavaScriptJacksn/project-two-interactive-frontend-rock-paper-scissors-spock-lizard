/*Functions for opening and closing the rules modal box*/

function popUp (){
    console.log("popUp called");
    let modal = document.getElementById("rules");
    let overlay = document.getElementById("overlay");
    modal.classList.add("popup-active");
    overlay.classList.add("overlay-active");
}

function rulesClose(){
    console.log("rulesClose called")
    let modal = document.getElementById("rules");
    let overlay = document.getElementById("overlay");
    modal.classList.remove("popup-active");
    overlay.classList.remove("overlay-active");
}

/*Functions for opening and closing player 1 change move modal box*/

function player1ChangeMove (){
    console.log("Player 1 select a move");
    let modal = document.getElementById("player1-move-box");
    let overlay = document.getElementById("overlay");
    modal.classList.add("popup-active");
    overlay.classList.add("overlay-active");
}

function player1MoveClose(){
    console.log("Player1MoveClose called")
    let modal = document.getElementById("player1-move-box");
    let overlay = document.getElementById("overlay");
    modal.classList.remove("popup-active");
    overlay.classList.remove("overlay-active");
}

/*Functions for opening and closing player 2 change move modal box*/

function player2ChangeMove (){
    console.log("Player 1 select a move");
    let modal = document.getElementById("player2-move-box");
    let overlay = document.getElementById("overlay");
    modal.classList.add("popup-active");
    overlay.classList.add("overlay-active");
}

function player2MoveClose(){
    console.log("Player1MoveClose called")
    let modal = document.getElementById("player2-move-box");
    let overlay = document.getElementById("overlay");
    modal.classList.remove("popup-active");
    overlay.classList.remove("overlay-active");
}