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
        "Dist. under MIT License",
        "Dist. under GNU GPLv3 License",
        "Dist. under Apache License 2.0"],
    name: "userLicense",
  },
  {
    type: "input",
    message: "Please provide your FULL NAME: ",
    name: "name",
  },
  {
    type: "input",
    message: "Please provide your Github USERNAME: ",
    name: "userName",
  },
  {
    type: "input",
    message: "Please provide your EMAIL: ",
    name: "userEmail",
  },
];

// function to write README file
function writeToFile(fileName, data) { 

    fs.writeFileSync(fileName, generateReadme(data));
    LicenseBadge(data);
    console.log("User Inputs updated, your Readme file is ready to view.")
}

// adds Badge 
function LicenseBadge(data){
  if (data.userLicense === "Dist. under MIT License") {
    fs.appendFileSync(fileName, "\n\n[MIT](https://img.shields.io/badge/License-MIT-yellow.svg) (https://opensource.org/licenses/MIT)")
  } else if (data.userLicense === "Dist. under GNU GPLv3 License") {
    fs.appendFileSync(fileName,"\n\n[GPL](https://img.shields.io/badge/License-GPLv3-blue.svg) (https://www.gnu.org/licenses/gpl-3.0)")
  } else {
    fs.appendFileSync(fileName,"\n\n[Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg) (https://opensource.org/licenses/Apache-2.0)")
  }
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
