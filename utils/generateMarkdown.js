// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  console.log(license);
  switch (license) {
    case 'MIT License':
      '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      break;
    case 'GNU GPLv3':
      '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
      break;
    case 'GNU AGPLv3':
      '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
      break;
    case 'GNU LGPLv3':
      '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
      break;
    case 'Mozilla Public License 2.0':
      '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
      break;
    case 'Apache License 2.0':
      '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;
    case 'Boost Siftware License 1.0':
      '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
      break;
    case 'The Unlicense':
      '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
      break;
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
  switch (license) {
    case 'MIT License':

      break;
    case 'GNU GPLv3':

      break;
    case 'GNU AGPLv3':

      break;
    case 'GNU LGPLv3':

      break;
    case 'Mozilla Public License 2.0':

      break;
    case 'Apache License 2.0':

      break;
    case 'Boost Siftware License 1.0':

      break;
    case 'The Unlicense':

      break;
    default:
      return '';
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  switch (license) {
    case 'MIT License':

      break;
    case 'GNU GPLv3':

      break;
    case 'GNU AGPLv3':

      break;
    case 'GNU LGPLv3':

      break;
    case 'Mozilla Public License 2.0':

      break;
    case 'Apache License 2.0':

      break;
    case 'Boost Siftware License 1.0':

      break;
    case 'The Unlicense':

      break;
    default:
      return '';
  }

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
  // console.log('test inside generateMarkdown');
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



## Contribution

${contribution}

## Tests

> ${test}


## Questions


`
}


module.exports = generateMarkdown;
