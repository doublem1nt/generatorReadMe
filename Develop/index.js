const inquirer = require("inquirer");
const fs = require("fs");

const readme = require("./utils/generateMarkdown.js");

const fileName = "README.md"

// array of questions for user
const questions = [
    {
        type: "input",
        message: "Please provide the project TITLE: ",
        name: "title",
      },
      {
        type: "input",
        message: "Please provide the project DESCRIPTION: ",
        name: 'description',
      },
      {
        type: "input",
        message: "Please provide INSTALLATION instructions: ",
        name: "installation",
      },
      {
        type: "input",
        message: "Please provide USAGE information: ",
        name: "usage",
      },
      {
        type: "input",
        message: "Please provide CONTRIBUTION guidelines: ",
        name: "contribution",
      },
      {
        type: "input",
        message: "Please provide TEST instructions: ",
        name: "test",
      },
];

// function to write README file
function writeToFile(fileName, data) {
    // fs.writeFile(fileName, )
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then((response) => 
            console.log(response)
        );
}

// function call to initialize program
init();
