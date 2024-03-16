// wait for the DOM to finish loading before running the game
// get button emelemts and add event lsiteners to them

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener('click', function(){
            if (this.getAttribute("data-type" === "submit")){
                alert("You cliked submit");}
                else {
                    let gameType=this.getAttribute("data-type");
                    alert(`You clicked ${gameType}`);
                }
            })
        }
    })

function runGame(){

}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(){

}

function displayMultiplyQuestion(){

}

function displaySubtractQuestion(){

}