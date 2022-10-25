// TODO: Include packages needed for this application
const inquirer = require('inquirer');
console.log('challenge 9 node noodles');
const fs = require('fs');
// TODO: Create an array of questions for user input
const person = {
    fistName: "paul",
    lastName: "courts"

}



const questions = [
    {
        type: 'input',
        name: 'tittle',
        message: 'what is your project name ?',
        default: false,
    },
    {
        type: 'input',
        name: 'email',
        massage: "what is your email ?",
        
    },
    {
    type: 'confirm',
    name: 'school',
    message: "do you go to SMU ?"
    },

{
    type: 'input',
    name: 'github',
    message: 'what is your git-hub name ?',
},

{
type:'input',
name:'app',
message:'whats your app for ?',
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

inquirer
  .prompt(questions)
    /* Pass your questions in here */
  .then((answers) => {
    // Use user feedback for... whatever!!
const markdown=''
fs.writeFileSync('./output/readme.md',markdown)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });