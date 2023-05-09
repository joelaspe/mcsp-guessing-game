var scoreBoard = JSON.parse(localStorage.getItem('scoreBoard'));
var player = prompt("Welcome to the guessing game. What is your name?");
while(player.length > 20)
{
    player = prompt("Player name must be less than 20 characters");
}


//required when running the program for the first time on a browser
if(scoreBoard === null)
{
    scoreBoard = { };
}

guessingGame(player, scoreBoard);

function guessingGame(player, scoreBoard) {
    if(!scoreBoard[player]) {
        scoreBoard[player] = {
            name: player,
            guesses: [],
            bestScore: Infinity
        }
    }
    var input = parseInt(prompt(`Hello ${scoreBoard[player].name}! Guess a number between 1 and 100`));
    var num = getRandomInt(1,100);
    //var num = 50; // only used for testing
    var arrayTries = [input];
    while(input !== num)
    {
        if(input > num ) {
            input = parseInt(prompt((`Lower ${scoreBoard[player].name}...`)));
        }
        else {
            input = parseInt(prompt((`Higher ${scoreBoard[player].name}...`)));
        }
        arrayTries.push(input);
    }
    // Feature 4: the user guessed the correct number, display the high scores and the last games result
    alert(`Correct ${scoreBoard[player].name}! Your previous guesses were ` + arrayTries.join(`, `) + `.`);
    var numGuess = arrayTries.length;
    
    if(scoreBoard[player].guesses === [] || numGuess < scoreBoard[player].bestScore)
    {
        scoreBoard[player].guesses.push(numGuess);
        scoreBoard[player].bestScore = numGuess;
        console.log('Either first time playing or a new high score');
        console.log(scoreBoard[player].bestScore);
    } else {
        scoreBoard[player].guesses.push(numGuess);
        console.log('Did not beat a high score. The high score is ' + scoreBoard[player].bestScore);
    } 
    var scoreBoardEntries = getHighScores(scoreBoard); // [['Nathan', 5], ['Joey', 3]]
    console.log(scoreBoardEntries);
    var scoreBoardString = ''; 
    var emptySpace = ' ';
    for(let i = 0; i < scoreBoardEntries.length; i++)
    {
        var whitespaceSize = 20 - scoreBoardEntries[i][0].length; //determine whitespace to add
        console.log('Determining whitespace. For player: ' + scoreBoardEntries[i][0] + ' it is ' + whitespaceSize);
        scoreBoardString += scoreBoardEntries[i][0] + emptySpace.repeat(whitespaceSize) + ':     ' + scoreBoardEntries[i][1] + '\n';
      
    }
    console.log(scoreBoardString);
    alert(scoreBoardString);
    localStorage.setItem('scoreBoard', JSON.stringify(scoreBoard));
    
    
    if(confirm('Would you like to play again?')) {
        guessingGame(player, scoreBoard);
    }
    else{
        player = prompt("What is your name?");
        guessingGame(player, scoreBoard);
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  
function getHighScores(scoreBoard) {
    //returns an array of all player names and high scores
    var scoreArray = [];   // [['Nathan', 5], ['Joey', 3]]
    var scoreKeys = Object.keys(scoreBoard);
    for(var i = 0; i < scoreKeys.length; i++)
    {
        scoreArray.push([scoreKeys[i], scoreBoard[scoreKeys[i]].bestScore]);
    }
    return scoreArray;
}

