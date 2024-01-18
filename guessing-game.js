const superSecretNumber = 3301;

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const randomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min )
}

let numAttempts;

const askLimit = () => {
    rl.question("How many tries?",(user) => {

        numAttempts = Number(user);

        const askRange = () => {
            rl.question("Enter a max number:", (max) => {
                rl.question("Enter a min number:", (min) => {
                    console.log(`I'm thinking of a number between ${min} and ${max}...`)
                    let secretNum = randomInRange(Number(min), Number(max));
                    askGuess(secretNum);
                })
            })
        }
    askRange()
    });
}
askLimit();

const checkGuess = (num, secretNum) => {
    if(num === superSecretNumber){
        console.log("Super Secret Identification Required::")
        rl.question("Login???", (answer) => {
            if(answer === "PAX") {
                console.log("Login Confirmed:")
                rl.question("Password???", (answer2) => {
                    if(answer2 === "Bandersnatch"){
                        console.log("Login Sucessful!")
                        console.log("Welcome!")
                        console.log("Input Recieved Anonymous::")
                        console.log("Connecting To Onions And Radishes::")
                        console.log("Hacker Workspace Initialized::")
                        rl.question("Please Specify Target::", (target) => {
                            console.log(`Cyber Attack Unit Sent To ${target}`)
                            console.log(`${target}'s defenses have been DESTOYED!:::`)
                            console.log("This Program Will Now Self Destruct!:::")
                            rl.close();
                        })
                    }
                    else{
                        console.log("Converting your data!")
                        const firewall = () => {
                            console.log("Finished!::");
                            rl.close();
                        }
                        setTimeout(firewall,5000)
                    }
                })
            }
            else {
                console.log("We know who you are!");
                rl.close();
            }
        })
    }


    if(Number(num) > secretNum){
        console.log("Too high.");
        return false;

    }
    if(Number(num) < secretNum) {
        console.log("Too low.")
        return false;
    }
    if(Number(num) === secretNum){
        console.log("Correct!")
        return true;
    }
}

const askGuess = (secretNum) => {
    rl.question('Enter a guess:', (number) => {
        number = Number(number);
        if(checkGuess(number, secretNum )) {
            console.log("You Win!")
            rl.close();
        }
        else{
            numAttempts--;
            console.log(`${numAttempts} guesses remaining!`);

            if(numAttempts === 0) {
                console.log("Sorry you lose!")
                return rl.close()
            }
            askGuess(secretNum);
        }
    })
}
