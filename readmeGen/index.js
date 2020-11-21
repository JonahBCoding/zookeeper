const inquirer = require('inquirer');
const fs = require('fs');



const criteria = [
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username',
        default: 'githubusername',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Enter a valid GitHub Username!");
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'repository',
        message: 'Enter the name of the GitHub repository.',
        default: 'GitHub-Repository',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid GitHub repository!");
            } else {
                return true;
            }
        }

    },
    {
        type: 'input',
        name: 'project-title',
        message: 'Please enter the title of your Project',
        default: 'Repository Title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter the title of your project!");
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project',
        default: 'DescriptionHere',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a project description!");
            } else {
                return true;
            }
        } 
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please describe how to download your application'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples to use in the Usage section of your README'
    },
   
]