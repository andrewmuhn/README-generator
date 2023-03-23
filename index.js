// TODO: Include packages needed for this application
const fs = require('fs');
const fsPromises = require('fs').promises;
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
  'What is the title of your project?',
  'Describe your project?',
  'How do you use your project?',
  'How do you contribute to the project?',
  'What command should be run to install dependancies', //npm i
  'What command command should be run to run tests?', //npm test
  'Which license do you want to use?',
  'Please enter your GitHub username?',
  'Please enter your email.'
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
  fsPromises.writeFile(fileName, generateMarkdown(data));

}

const promptUser = async () => {
  await inquirer
    .prompt([
      {
        type: 'input',
        message: questions[0],
        name: 'title'
      },
      {
        type: 'input',
        message: questions[1],
        name: 'description'
      },
      {
        type: 'input',
        message: questions[2],
        name: 'usage'
      },
      {
        type: 'input',
        message: questions[3],
        name: 'contribution'
      },
      {
        type: 'input',
        message: questions[4],
        name: 'installation',
        default: 'npm i'
      },
      {
        type: 'input',
        message: questions[5],
        name: 'test',
        default: 'npm test'
      },
      {
        type: 'list',
        message: questions[6],
        name: 'license',
        choices: [
          'MIT License',
          'GNU GPLv3',
          'GNU AGPLv3',
          'GNU LGPLv3',
          'Mozilla Public License 2.0',
          'Apache License 2.0',
          'Boost Siftware License 1.0',
          'The Unlicense'
        ],
        loop: false
      },
      {
        type: 'input',
        message: questions[7],
        name: 'github'
      },
      {
        type: 'input',
        message: questions[8],
        name: 'email'
      },
    ])
    .then((responses) => {
      console.log(responses);
      const fileName = `${responses.title.toLowerCase().split(' ').join('')}.md`;
      // fs.writeFile(fileName, JSON.stringify(responses, null, '\t'), (err) => err ? console.error(err) : console.log('WooHoo!'));
      writeToFile(fileName, responses)
    })
    .then(() => console.log('success!'))
    .catch((err) => console.error(err));

}

// TODO: Create a function to initialize app
const init = () => {
  promptUser()
}

// Function call to initialize app
init();
