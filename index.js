// Packages needed for this application
const { writeFile } = require('fs').promises;
const inquirer = require('inquirer');
// local file that handles generating the markdown text.
const generateMarkdown = require('./utils/generateMarkdown.js')

// An array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
    validate: (title) => {
      if (!title) {
        return console.error('A valid title must be entered');
      } else {
        return true
      }
    }
  },
  {
    type: 'input',
    message: 'Describe your project?',
    name: 'description',
    validate: (description) => {
      if (!description) {
        return console.error('A valid description username must be entered');
      } else {
        return true
      }
    }
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
    name: 'github',
    validate: (github) => {
      if (!github) {
        return console.error('A valid GitHub username must be entered');
      } else {
        return true
      }
    }
  },
  {
    type: 'input',
    message: 'Please enter your email.',
    name: 'email',
    validate: (email) => {
      valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
      if (valid) {
        return true
      } else {
        console.error('A valid email must be entered')
        return false
      }
    }
  }
];

// Function to write README file
const writeToFile = (fileName, data) => {
  writeFile(fileName, generateMarkdown(data));
}

// Function that prompts user usings inquirer
const promptUser = () => {
  return inquirer
    .prompt(questions)
}

// Initialize app function
const init = () => {
  promptUser()
    .then((responses) => {
      writeToFile('exampleREADME.md', responses)
    })
    .then(() => console.log('successfully wrote '))
    .catch((err) => console.error(err));

}

// Function call to initialize app
init();
