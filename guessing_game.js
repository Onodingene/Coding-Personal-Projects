let randomNumber = parseInt(Math.random()*50+1);

const submit = document.querySelector('#Sub');
const userInput = document.querySelector('#guessfield');
const guessSlot = document.querySelector('.guess');
const remaining = document.querySelector('.lastresult');
const startover = document.querySelector('.resultpress');
const lowOrii = document.querySelector('.lowOrii');

const p = document.createElement('p');

let previousGuesses = [];
let numGuesses =1;
let playGame = true;

const p = document.createElement('P');

let previousGuesses =[];
let numGuesses =1;
let playGame = true;

if (playGame){
    submit.addEventListener('click', function(e)(
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validation(guess);
    ));

    function validateGuess(guess){
        if (isNaN(guess)){
        alert("Please enter a valid number");
        }else if (guess<1){
            alert("Please enter a number greater than 1");
        }else if (guess>50){
            alert("Please enter anumber less than 50")
        }
        else{
            previousGuesses.push(guess);
            if (numGuesses === 12){
                displayGuesses(guess);
                dispalyMessage("Game Over! NUmber was ${randomNumber}");
                endGame();
            }else{
                displayGuesses(guess);
                checkGuess(guess);
            }    
            }
        }
    }
function checkGuess(guess){
    if (guess === randomNumber){
        dispalyMessage('You guessed correctly');
        endGame();
    }else if (guess < randomNumber){
        dispalyMessage("Too low! Try Again!");
        else
    }
    }
}
