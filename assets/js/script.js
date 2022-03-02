/*Functions for opening and closing the rules modal box*/


function popUp (modal){
    console.log("popUp called");
    console.log(modal);
    let box = document.getElementById(modal);
    let overlay = document.getElementById("overlay");
    box.classList.add("popup-active");
    overlay.classList.add("overlay-active");
}

function popupClose(modal){
    console.log("popUp called");
    console.log(modal);
    let box = document.getElementById(modal);
    let overlay = document.getElementById("overlay");
    box.classList.remove("popup-active");
    overlay.classList.remove("overlay-active");
}

/*Inital function to set up event listeners*/
document.addEventListener("DOMContentLoaded", function (){
    let moveImages = document.getElementsByTagName("figure");
    
    for (let image of moveImages){
        image.addEventListener("click", changeMove)
    }
    });

/*Change move function*/

function changeMove(){
    console.log("changeMove called")
    let parentId = this.parentNode.parentNode.id;
    let currentPlayer
    let currentMove
    /*Checks which player is changing moves*/
    if (parentId === "player1-move-box"){
        console.log("player 1 is changing move")
        currentPlayer = "1"
    } else if (parentId === "player2-move-box"){
        console.log("player 2 is changing move")
        currentPlayer = "2"
    } else {
        /*Error mesage, you know, just in case*/
        throw alert("error")
    }
    /**If this is still not optimised when I hand in the project,
    * I apoligse for the hard to follow function
    * Essentially, it gets the id of the current image move from slicing the parentID string
    * Then gets the element with that ID and its outer HTML
    * Then swaps it for the outer HTML of the image just selected
    * It then adds the missing id of playerX-move to the image again
    */
    let newMoveHtml = this.children[0].outerHTML
    console.log(newMoveHtml)
    let currentMoveId = parentId.slice(0, 12)
    console.log(currentMoveId)
    currentMove = document.getElementById(currentMoveId)
    console.log(currentMove.outerHTML)
    currentMove.outerHTML = newMoveHtml
    /* It then adds the missing id of playerX-move to the image again*/
}

function runGame(){

}

function checkResult(){

}

function incrementScore(){

}