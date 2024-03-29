#! /usr/bin/env node

import inquirer from "inquirer";

// Welcome Message
console.log("\n WELCOME TO MY SIMPLE CALCULATOR \n")

// ask input from user
let answer = await inquirer.prompt([
    {message: "Enter 1st number", type : "number" , name : "firstNum"},
    {message: "Enter 2nd number", type : "number" , name : "secondNum"},
    {message: "Select an Operator", type : "list" , name : "operators", 
    choices: ["Addition", "Subtraction", "Multiplication", "Division"]}
]);

// conditional statment for perform operation
if(answer.operators == "Addition"){
    console.log( answer.firstNum + answer.secondNum);
}

else if(answer.operators == "Subtraction"){
    console.log( answer.firstNum - answer.secondNum);
}

else if(answer.operators == "Division"){
    console.log( answer.firstNum / answer.secondNum);
}

else if(answer.operators == "Multiplication"){
    console.log( answer.firstNum * answer.secondNum);
}

else { 
    console.log("Invalid Input")
}