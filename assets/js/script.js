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

    /**
     * the man game "loop" called when the script is firsth loaded}
     * and adter the users last answer has been processed
     */
function runGame(){

    //creates 2 random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25)+ 1;
    let num2 = Math.floor(Math.random() * 25)+ 1;
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