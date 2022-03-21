//Inital function to set up event listeners
document.addEventListener("DOMContentLoaded", function (){
    let moveImages = document.getElementsByTagName("figure");
    
    for (let image of moveImages){
        image.addEventListener("click", changeMove);
        image.addEventListener("click", alertPlayerChoice);
    }
    });

//Functions for opening and closing the rules modal box

function popUp (modal){
    let box = document.getElementById(modal);
    let overlay = document.getElementById("overlay");
    box.classList.add("popup-active");
    overlay.classList.add("overlay-active");
}

function popupClose(modal){
    let box = document.getElementById(modal);
    let overlay = document.getElementById("overlay");
    box.classList.remove("popup-active");
    overlay.classList.remove("overlay-active");
    /**
     * This checks to see if it is the end game modal being closed, to then alert the user to change move again.
     * Furthermore, this if statement also prompts players 1 & 2 for change of move if the game mode is PVP.
     * The player 2 alert prompt will only be called at the closing of the player 1 move box.
     * A short delay is used to make the alerts more user-friendly.
     */
    if (modal === "end-game" || modal === "rules"){
        setTimeout(alert("PLAYER 1, CHOSE YOUR MOVE!"), 1500);
    } else if (modal === "player1-move-box" && document.getElementById("game-mode").textContent === "pvp"){
        setTimeout(alert("PLAYER 2, CHOSE YOUR MOVE!"), 1500);
    }
}

//Change move function

function changeMove(){
    let parentId = this.parentNode.parentNode.id;
    let currentMove;
    /**
     * If this is still not optimised when I hand in the project,
    * I apoligse for the hard to follow function
    * Essentially, it gets the id of the current image move from slicing the parentID string
    * Then gets the element with that ID and its outer HTML
    * Then swaps it for the outer HTML of the image just selected
    * This allows for the image to be read from the DOM again
    * This is to not create global variables.
    */
    let newMoveHtml = this.children[0].outerHTML;
    let currentMoveId = parentId.slice(0, 12);
    currentMove = document.getElementById(currentMoveId);
    currentMove.innerHTML = newMoveHtml;
}

// This function alerts the player of their currently selected move
function alertPlayerChoice (){
    let moveName = this.children[1].textContent;
    alert(`You have chosen ${moveName}`);
}

// Function to change game mode
function changeGameMode(choice){
    if (choice === "pvp"){
        document.getElementById("game-mode").textContent = "pvp";
        popUp("rules");
    } else if (choice === "pvc"){
        document.getElementById("game-mode").textContent = "pvc";
        popUp("rules");
    } else {
        throw alert ("Please select a game mode");
    }
    // This function also resets the scores to 0, as users will expect to play with a clean slate against a new oponent
    document.getElementById("player1-score").textContent = "0";
    document.getElementById("player2-score").textContent = "0";
}

/**
 * The functions below run the game, score checking, 
 * computer move generation (if needed) and 
 * score incrementation
 */

function runGame(){
    let gameMode = document.getElementById("game-mode").textContent;
    if (gameMode === ""){
        alert ("Please select a game mode");
        return;
    }
    /**
    * Audio is loaded here to allow mest match of timings
    * However on the intial round, users may experience audio delay if not loaded
    */

    let victoryAudio = new Audio("assets/audio/sfx-victory3.mp3");  
    
    if (gameMode === "pvc"){
        computerMove();
        incrementScore(checkResult());
    } else {
        incrementScore(checkResult());
    }
    document.getElementById("player1-move").classList.remove("hide-element");
    document.getElementById("player2-move").classList.remove("hide-element");

    // Allows time for players to react themselves to the moves shown before the message is displayed
    victoryAudio.play();
    setTimeout(popUp, 5000, "end-game");
    setTimeout(newGame, 6000);
}

/**
 * Generates the computer move when called
 * This function generates a random move number
 * Then reads the children figure elements of the moves-container div 
 * Then writes that back to the DOM similarly to the manual selection in PVP
*/

function computerMove(){
    let currentMove = document.getElementById("player2-move").children[0];
    let newMoveHtml = document.getElementById("moves-container").children;
    let moveNum = Math.floor(Math.random()*5);
    currentMove.outerHTML = newMoveHtml[moveNum].children[0].outerHTML;
}

/**
 * Display images of moves and delcare winner
* Potentially create the rules in the runGame function rather than globally
* Pass it as the argument for this checkResult function
* */

function checkResult(){
    let answers = [
        ['scissors',    'paper',    'Scissors cuts paper!'],
        ['paper',       'rock',     'Paper covers rock!'],
        ['rock' ,       'lizard',   'Rock crushes lizard!'],
        ['lizard' ,     'spock',    'Lizard poisons Spock!'],
        ['spock' ,      'scissors', 'Spock smashes scissors!'],
        ['scissors' ,   'lizard',   'Scissors decapitate lizard!'],
        ['lizard' ,     'paper',    'Lizard eats paper!'],
        ['paper' ,      'spock',    'Paper disproves Spock!'],
        ['spock' ,      'rock',     'Spock vaporizes rock!'],
        ['rock'  ,      'scissors', 'Rock crushes scissors!']
    ];

    let p1Move = document.getElementById("player1-move").children[0].getAttribute("data-type");
    let p2Move = document.getElementById("player2-move").children[0].getAttribute("data-type");
    let victoryMessage;
    let winner;
    for (let i = 0; i < answers.length; i++) {
        if ((answers[i][0] === p1Move) && (answers[i][1] === p2Move)){
            winner = "player1";
            victoryMessage = answers[i][2];
            break;
        } else if ((answers[i][0] === p2Move) && (answers[i][1] === p1Move)){
            winner = "player2";
            victoryMessage = answers[i][2];
            break;
        } else {
            continue;
        }
    }

    let secondaryMessage = `${winner} wins`;

    if (winner === undefined){
        victoryMessage = "It's a draw!";
        secondaryMessage ="No winners!";
    }

    /*Writes the messages of the winner to the end-game modal*/
    
    document.getElementById("victory-message").innerText = victoryMessage;
    document.getElementById("secondary-message").innerText = secondaryMessage;

    document.getElementById("player1-move").classList.remove("hide-element");
    document.getElementById("player2-move").classList.remove("hide-element");
    
    return winner;
}

/*Increments the score for either player depending on victor, and also reseting the game*/

function incrementScore(winner){
    let player1Score = parseInt(document.getElementById("player1-score").textContent);
    let player2Score = parseInt(document.getElementById("player2-score").textContent);
    if (winner === "player1"){
        player1Score++;
        document.getElementById("player1-score").textContent = player1Score;
    }else if (winner === "player2"){
        player2Score++;
        document.getElementById("player2-score").textContent = player2Score;
    }
}

// Resets game
function newGame(){
    document.getElementById("player1-move").classList.add("hide-element");
    document.getElementById("player2-move").classList.add("hide-element");
}