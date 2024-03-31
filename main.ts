#! /usr/bin/env node

import inquirer from "inquirer";

const main = async () => {
    let todos = [];
    let condition = "true";
    while(condition){
        let addTask = await inquirer.prompt([
            {
                name: "todo",
                type: "input",
                message: "what do you want to add to your Todos?"
            },
            {
                name: 'addMore',
                type:'confirm',
                message: 'Do you want to add more?',
                default:"false",
            }
        ]);
        todos.push(addTask.todo);
        condition = addTask.addMore;
        console.log(todos);
    }
};
main();