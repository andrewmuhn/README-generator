// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  console.log(license);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {

}

//TODO: Create a function that returns a title in proper format
const renderTitle = title => {
  console.log(title);
  return `${title.split(' ').join('-')}`;

}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({ title, description, installation, usage, contribution, test, license, github, email }) => {
  renderLicenseBadge(license);
  renderLicenseLink(license);
  renderLicenseSection(license);
  console.log('test inside generateMarkdown');
  return `# <${renderTitle(title)}>

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${installation}

## Usage

${usage}

## Credits



## License



## Badges



## Features



## How to Contribute

${contribution}

## Tests

> ${test}

`
}


module.exports = generateMarkdown;
