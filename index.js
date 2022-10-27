// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is your project title ?',

    },
    {
        type: 'input',
        name: 'email',
        massage: "what is your email ?",

    },
    {
    type: "list",
    name: "license",
    message: "What license is needed?",
    choices: ['None', 'MIT', 'Apache', 'Boost', 'BDS 3-Clause']
    },

    {
        type: 'input',
        name: 'description',
        massage: 'what is your project purpose ?'

    },

    {
        type: 'input',
        name: 'github',
        message: 'what is your git-hub name ?',
    },

    {
        type: 'input',
        name: 'app',
        message: 'whats your app consist of ?',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, function (err) {
        console.log(data)
        if (err) {
            console.log(err)
        } else {
            console.log("README.md successfully created")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            writeToFile("README.md", generateMarkdown(data))
            console.log(data)
        })
}
// Function call to initialize app
init();

