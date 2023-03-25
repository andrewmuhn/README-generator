// TODO: Include packages needed for this application
const fs = require('fs');
const { writeFile } = require('fs').promises;
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title'
  },
  {
    type: 'input',
    message: 'Describe your project?',
    name: 'description'
  },
  {
    type: 'input',
    message: 'How do you use your project?',
    name: 'usage'
  },
  {
    type: 'input',
    message: 'How do you contribute to the project?',
    name: 'contribution'
  },
  {
    type: 'input',
    message: 'What command should be run to install dependancies',
    name: 'installation',
    default: 'npm i'
  },
  {
    type: 'input',
    message: 'What command command should be run to run tests?',
    name: 'test',
    default: 'npm test'
  },
  {
    type: 'list',
    message: 'Which license do you want to use?',
    name: 'license',
    choices: [
      'MIT License',
      'GNU GPLv3',
      'GNU AGPLv3',
      'GNU LGPLv3',
      'Mozilla Public License 2.0',
      'Apache License 2.0',
      'Boost Siftware License 1.0',
      'The Unlicense',
      'No License'
    ],
    loop: false
  },
  {
    type: 'input',
    message: 'Please enter your GitHub username?',
    name: 'github'
  },
  {
    type: 'input',
    message: 'Please enter your email.',
    name: 'email'
  }
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
  console.log('test');
  writeFile(fileName, generateMarkdown(data));
}

const promptUser = () => {
  return inquirer
    .prompt(questions)

}

// TODO: Create a function to initialize app
const init = () => {
  promptUser()
    .then((responses) => {
      // console.log(responses);
      writeToFile('exampleREADME.md', responses)
    })
    .then(() => console.log('successfully wrote '))
    .catch((err) => console.error(err));

}

// Function call to initialize app
init();
