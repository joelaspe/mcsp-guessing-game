var scoreBoard = {
    /* 
    `Chief`: 5
    `Joey`: 7 */
}
var name = prompt("Welcome to the guessing game. What is your name?");
scoreBoard = JSON.parse(localStorage.getItem('scoreBoard'));
guessingGame(name, scoreBoard);

function playAgain() {
    var result = prompt("Play again? (yes/no)");
    if(result.toLowerCase() === 'yes' || result.toLowerCase() === 'y')
    {
        return true;
    }
    return false;
}

function guessingGame(name, scoreBoard) {
    var input = parseInt(prompt(`Hello ${name}! Guess a number between 1 and 100`));
    //var num = getRandomInt(1,100);
    num = 50;
    var arrayTries = [input];
    while(input !== num)
    {
        if(input > num ) {
            input = parseInt(prompt((`Lower ${name}...`)));
        }
        else {
            input = parseInt(prompt((`Higher ${name}...`)));
        }
        arrayTries.push(input);
    }
    // the user guessed the correct number, display the high scores and the last games result
    alert(`Correct ${name}! Your previous guesses were ` + arrayTries.join(`, `) + `.`);
    var numGuess = arrayTries.length;
    
    if(scoreBoard[name] === undefined)
    {
        scoreBoard[name] = numGuess;
    } else if(numGuess < scoreBoard[name])
    {
        scoreBoard[name] = numGuess;
    }
    var scoreBoardEntries = Object.entries(scoreBoard); // [['Nathan', 5], ['Joey', 3]]
    console.log(scoreBoardEntries);
    var scoreBoardString = ''; 
    var emptySpace = ' ';
    for(let i = 0; i < scoreBoardEntries.length; i++)
    {
        var whitespaceSize = 10 - scoreBoardEntries[i][0].length; //determine whitespace to add
        //scoreBoardString += scoreBoardEntries[i].join(':'); //--> 'Nathan     :     5'
       scoreBoardString += scoreBoardEntries[i][0] + emptySpace.repeat(whitespaceSize) + ':     ' + scoreBoardEntries[i][1] + '\n';
      
    }
    console.log(scoreBoardString);
    alert(scoreBoardString);
    localStorage.setItem('scoreBoard', JSON.stringify(scoreBoard));
    if(playAgain()) {
        guessingGame(name, scoreBoard);
    }
    else{
        name = prompt("What is your name?");
        guessingGame(name, scoreBoard);
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  

/*

  Joey: 5
  Nathan: 6
  Chief: 10

  Joey     :    5
  Nathan   :    6
  Chief    :    10
  */