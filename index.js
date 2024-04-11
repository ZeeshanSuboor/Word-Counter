#! /usr/bin/env node
import inquirer from "inquirer";
let type_para = await inquirer.prompt([
    {
        name: "myText",
        message: "Please type the paragraph and hit enter: \n",
        type: "input",
    }
]);
let my_para = type_para.myText;
let my_array = my_para.split(" ");
//console.clear();
//console.log(my_array.length,my_array,"before");
let cleanArray = my_array.filter(function (e) { return e; });
//let cleanArray = my_array.filter(function () { return true; });
console.log("Word Count : ", cleanArray.length);
console.log("Charachter Count : ", my_para.length);
console.log("Charachter Count without white spaces: ", my_para.replaceAll(' ', '').length);
