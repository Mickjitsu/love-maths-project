// wait for the DOM to finish loading before running the game
// get button emelemts and add event lsiteners to them

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener('click', function(){
            if (this.getAttribute("data-type") === "submit"){
                checkAnswer();
            } else {
                    let gameType=this.getAttribute("data-type");
                    runGame(gameType);
                }
            })
        }

        runGame("addition");
    });

    /**
     * the man game "loop" called when the script is firsth loaded}
     * and adter the users last answer has been processed
     */
function runGame(gameType){

    //creates 2 random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25)+ 1;
    let num2 = Math.floor(Math.random() * 25)+ 1;

    if (gameType === "addition"){
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}
/**
 * check the answer against first element in the 
 * calculatedcorrectanswer arra
 */
function checkAnswer(){
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect){
        alert('Hey! You got it right :)')
    }
    else {
        alert(`Awww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}`); 
    }

    runGame(calculatedAnswer[1]);
}
/**
 * Gets the operands and the operator directly from the dom and returns correct answer
 */
function calculateCorrectAnswer(){
     let operand1 = parseInt(document.getElementById('operand1').innerText);
     let operand2 = parseInt(document.getElementById('operand2').innerText);
     let operator = document.getElementById('operator').innerText;

    if (operator === '+'){
        return [operand1 + operand2, "addition"];
    } else {
        alert(`unimplemented operator ${operator}`);
        throw `unimplemented operator ${operator} aborting!`;
    }
}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displayMultiplyQuestion(){

}

function displaySubtractQuestion(){

}