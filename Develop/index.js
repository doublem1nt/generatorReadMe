const inquirer = require("inquirer");
const fs = require("fs");

const generateReadme = require("./utils/generateMarkdown.js");

const fileName = "README.md"

// array of questions for user
const questions = [
    {
        type: "input",
        message: "Please provide the project TITLE: ",
        name: "userTitle",
      },
      {
        type: "input",
        message: "Please provide the project DESCRIPTION: ",
        name: 'userDescription',
      },
      {
        type: "input",
        message: "Please provide INSTALLATION instructions: ",
        name: "userInstallation",
      },
      {
        type: "input",
        message: "Please provide USAGE information: ",
        name: "userUsage",
      },
      {
        type: "input",
        message: "Please provide CONTRIBUTION guidelines: ",
        name: "userContribution",
      },
      {
        type: "input",
        message: "Please provide TEST instructions: ",
        name: "userTest",
      },
      {
        type: "list",
        message: "Please choose your desired LICENSE :",
        choices: [
            "MIT License",
            "GNU GPLv3 License",
            "Apache License 2.0"],
        name: "userLicense",
      },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, "# " + data.userTitle, (err) => err
    ? console.log(err)
    // : fs.appendFile(fileName, JSON.stringify(data), 
    : fs.appendFile(fileName, generateReadme(data), (err) => err 
    ? console.log(err)
    : console.log("Readme successfully created"))
    )
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then((userData) =>
        writeToFile(fileName, userData)
        )
}

// function call to initialize program
init();
