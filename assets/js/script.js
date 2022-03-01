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