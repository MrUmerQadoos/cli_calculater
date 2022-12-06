#!usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalk_Animation from "chalk-animation";
const sleep = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });
};
async function welcom() {
    let rainbowtitel = chalk_Animation.rainbow('Let,s Start Calculation');
    await sleep();
    rainbowtitel.stop();
    console.log(`
    ___                            ___
    ||  |   ___         ___        ||  |
    || _|__/  _\_______/  _\_______|| _|
    ||(___(  (________(  (_________||((_)
    ||  |  \___/       \___/       ||  |
    ||  |         ___              ||  |
    || _|________/  _\_____________|| _|
    ||(_________(  (_______________||((_)
    ||  |        \___/             ||  |
    ||  |                          ||  |
    ||  |                          ||  | 
    ||  |                          ||  |

    
   `);
}
await welcom();
async function askquestion() {
    await inquirer
        .prompt([
        {
            type: "list",
            name: "operator",
            message: "Which Operation you want to perfome?\n",
            choices: ["Addition", "Substration", "multiplication", "divion"]
        }, {
            type: "number",
            name: "num1",
            message: "Enter Number 1"
        }, {
            type: "number",
            name: "num2",
            message: "Enter Number 2"
        }
    ])
        .then((answers) => {
        if (answers.operator == "Addition") {
            console.log(chalk.gray(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
        }
        else if (answers.operator == "Substration") {
            console.log(chalk.gray(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
        }
        else if (answers.operator == "multiplication") {
            console.log(chalk.gray(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
        }
        else if (answers.operator == "divion") {
            console.log(chalk.gray(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
        }
    });
}
;
// askquestion();
async function Startagain() {
    do {
        await askquestion();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "Do you want to countinous? Press y or n: "
        });
    } while (again.restart == 'Y' || again.restart == 'y');
}
Startagain();
