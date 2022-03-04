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
        image.addEventListener("click", alertPlayerChoice)
    }
    });

/*Change move function*/

function changeMove(){
    console.log("changeMove called")
    let parentId = this.parentNode.parentNode.id;
    let currentPlayer
    let currentMove
    /**If this is still not optimised when I hand in the project,
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

function runGame(){

}

function checkResult(){

}

function incrementScore(){

}

function changeGameMode(choice){
    if (choice === "pvp"){
        document.getElementById("game-mode").textContent = "pvp";
    } else if (choice === "pvc"){
        document.getElementById("game-mode").textContent = "pvc";
    } else {
        throw alert ("Invalid game mode")
    }
}

function promptPlayerInput(){

}