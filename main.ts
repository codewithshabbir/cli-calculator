#! /usr/bin/env node
import inquirer from "inquirer";

const questions: {
  numberOne: number,
  numberTwo: number,
  operators: string
} = await inquirer.prompt([
  {
    type: "number",
    name: "numberOne",
    message: "Kindly enter your first Number:",
  },
  {
    type: "number",
    name: "numberTwo",
    message: "Kindly enter your second Number:",
  },
  {
    type: "list",
    name: "operators",
    message: "Kindly select one off the operators to perform action:",
    choices: ["Addition","Subtraction","Muliplication","Division"]
  }
]);

const {numberOne, numberTwo, operators} = questions; // destructuring

if(!isNaN(numberOne) && !isNaN(numberTwo) && operators !== undefined){
    let result: string[] = calculator(numberOne, numberTwo, operators);
    console.log(`The ${result[1]} of two numbers is: ${result[0]}`);
}
else{
    console.log("Kindly Enter Valid Input");
}

function calculator(numberOne: number, numberTwo: number, operators: string){
    let resultOperator: string[] = [];
    let result: number = 0;
    if(operators === "Addition"){
        result = numberOne + numberTwo;
        resultOperator.push(result.toString(), operators);
    }
    else if(operators === "Subtraction"){
        result = numberOne - numberTwo;
        resultOperator.push(result.toString(), operators);
    }
    else if(operators === "Muliplication"){
        result = numberOne * numberTwo;
        resultOperator.push(result.toString(), operators);
    }
    else if(operators === "Division"){
        if (numberTwo !== 0) {
            result = numberOne / numberTwo;
            resultOperator.push(result.toString(), operators);
        } else {
            console.log("Cannot divide by zero!");
            process.exit(1); // Exit the process with an error code
        }
    }
    return resultOperator;
}
