/*Inital function to set up event listeners*/
document.addEventListener("DOMContentLoaded", function (){
    let moveImages = document.getElementsByTagName("figure");
    
    for (let image of moveImages){
        image.addEventListener("click", changeMove)
        image.addEventListener("click", alertPlayerChoice)
    }
    });

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

/*Change move function*/

function changeMove(){
    console.log("changeMove called")
    let parentId = this.parentNode.parentNode.id;
    let currentPlayer
    let currentMove
    /**
     * If this is still not optimised when I hand in the project,
    * I apoligse for the hard to follow function
    * Essentially, it gets the id of the current image move from slicing the parentID string
    * Then gets the element with that ID and its outer HTML
    * Then swaps it for the outer HTML of the image just selected
    * This allows for the image to be read from the DOM again
    */
    let newMoveHtml = this.children[0].outerHTML
    console.log(newMoveHtml)
    let currentMoveId = parentId.slice(0, 12)
    console.log(currentMoveId)
    currentMove = document.getElementById(currentMoveId)
    console.log(currentMove.innerHTML)
    currentMove.innerHTML = newMoveHtml
}

function alertPlayerChoice (){
    let moveName = this.children[1].textContent
    console.log(moveName);
    alert(`You have chosen ${moveName}`);
}

function changeGameMode(choice){
    if (choice === "pvp"){
        document.getElementById("game-mode").textContent = "pvp";
        popUp("rules")
    } else if (choice === "pvc"){
        document.getElementById("game-mode").textContent = "pvc";
        popUp("rules")
    } else {
        throw alert ("Please select a game mode");
    }
    /*This function also resets the scores to 0, as users will expect to play with a clean slate against a new oponent*/
    document.getElementById("player1-score").textContent = "0"
    document.getElementById("player2-score").textContent = "0"
}

/**
 * The functions below run the game, score checking, 
 * computer move generation (if needed) and 
 * score incrementation
 */

function runGame(){
    console.log("game started")
    let gameMode = document.getElementById("game-mode").textContent
    if (gameMode === ""){
        alert ("Please select a game mode");
    } else {
        console.log(`${gameMode} game running`)
    }
    if (gameMode === "pvc"){
        computerMove();
        checkResult();
    } else {
        checkResult();
    }
}

/**
 * Generates the computer move when called
 * This function generates a random move number
 * Then reads the children figure elements of the moves-container div 
 * Then writes that back to the DOM similarly to the manual selection in PVP
*/

function computerMove(){
    console.log("generating computer move");
    let currentMove = document.getElementById("player2-move").children[0];
    let newMoveHtml = document.getElementById("moves-container").children
    let moveNum = Math.floor(Math.random()*5);
    console.log(moveNum)
    currentMove = newMoveHtml[moveNum].children[0].outerHTML;
    console.log(`Computer selects move number ${moveNum} which is ${currentMove}`)

}

function checkResult(){
    console.log("checking result")
    let answers = {
        'Scissors'  :   ['Paper', 'Scissors cuts paper!'],
        'Paper'     :   ['Rock', 'Paper covers rock!'],
        'Rock'      :   ['Lizard', 'Rock crushes lizard!'],
        'Lizard'    :   ['Spock', 'Lizard poisons Spock!'],
        'Spock'     :   ['Scissors', 'Spock smashes scissors!'],
        'Scissors'  :   ['Lizard', 'Scissors decapitate lizards!'],
        'Lizard'    :   ['Paper', 'Lizard eats paper!'],
        'Paper'     :   ['Spock', 'Paper disproves Spock!'],
        'Spock'     :   ['Rock', 'Spock vaporizes rock!'],
        'Rock'      :   ['Scissors', 'Rock crushes scissors!'],
    }
    /**
     * Display images of moves and delcare winner
     * Potentially create the rules in the runGame function rather than globally
     * Pass it as the argument for this checkResult function
     * */
}

function incrementScore(){
    console.log("incremented score")
}