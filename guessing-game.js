const secretNumber = 3301;

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const checkGuess = (num) => {
    if(Number(num) > secretNumber){
        console.log("Too high.");
        return false;
        
    }
    if(Number(num) < secretNumber) {
        console.log("Too low.")
        return false;
    }
    if(Number(num) === secretNumber){
        console.log("Correct!")
        return true;
    }
}


rl.question('will you guess a number between 0 and 10,000???', (number) => {
    console.log(checkGuess(number));
       rl.close();
});
