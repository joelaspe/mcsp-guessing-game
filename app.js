var name = prompt("What is your name?");

guessingGame(name);

function playAgain() {
    var result = prompt("Play again? (yes/no)");
    if(result.toLowerCase() === 'yes' || result.toLowerCase() === 'y')
    {
        return true;
    }
    return false;
}

function guessingGame(name) {
    var input = prompt(`Hello ${name}! Guess a number`);
    var num = getRandomInt(1,100);
    var arrayTries = [input];
    console.log(input);
    while(input != num)
    {
        if(input > num ) {
            alert(`Lower ${name}...`);
        }
        else {
            alert(`Higher ${name}...`);
        }
        input = prompt(`Guess again`);
        arrayTries.push(input);
    }
    alert(`Correct ${name}! Your previous guesses were ` + arrayTries.join(`, `) + `.`);
    if(playAgain()) {
        guessingGame(name);
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  