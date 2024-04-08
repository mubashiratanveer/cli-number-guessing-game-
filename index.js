#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random number
// 2) user input for guessing number
// 3) compare user input with computer generated number and show result 
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([{
        name: "user guessed number",
        typr: "number",
        message: "please guess a number 1-10: ",
    }]);
// conditional statment
if (answer.userguessednumber === randomNumber) {
    console.log("congratulations! you guessed right number");
}
else {
    console.log("you guessed wrong number.");
}
;
