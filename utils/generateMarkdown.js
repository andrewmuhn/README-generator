// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  console.log(license);
  switch (license) {
    case 'MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    case 'GNU GPLv3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    case 'GNU AGPLv3':
      return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
    case 'GNU LGPLv3':
      return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
    case 'Mozilla Public License 2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    case 'Apache License 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    case 'Boost Siftware License 1.0':
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    case 'The Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
    default:
      return '';
  }
}

// Function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
  if (license === 'No License') {
    return '';
  } else {
    return '- [License](#license)'
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
 if (license === 'No License') {
  return '';
 } else {
  return `## License

This application is covered under by ${license};`
 }

}


// Function that returns the installation section of README
// If there is no installation, return an empty string
const renderinstallationSection = installation => {
if (!installation) {
  return '';
} else {
  return `## Installation

In order to install dependencies run the following command
> ${installation}`
}
}

// Function that returns the installation link
// If there is no installation, return an empty string
const renderinstallationLink = installation => {
if (!installation) {
  return '';
} else {
  return '- [Installation](#installation)'
}
}

// Function that returns the usage section of README
// If there is no usage, return an empty string
const renderusageSection = usage => {
  if (!usage) {
    return '';
  } else {
    return `## Usage

${usage}`
  }

}

// Function that returns the usage link
// If there is no usage, return an empty string
const renderusageLink = usage => {
if (!usage) {
  return '';
} else {
  return '- [Usage](#usage)'
}
}

// Function that returns the contribution section of README
// If there is no contribution, return an empty string
const rendercontributionSection = contribution => {
if (!contribution) {
  return '';
} else {
  return `## Contributing

${contribution}`
}
}

// Function that returns the contribution link
// If there is no contribution, return an empty string
const rendercontributionLink = contribution => {
if (!contribution) {
  return '';
} else {
  return '- [Contibuting](#contributing)'
}
}

// Function that returns the test section of README
// If there is no test, return an empty string
const rendertestSection = test => {
if (!test) {
  return '';
} else {
  return `## Tests

In order to run tests run the following command(s)
> ${test}`
}
}

// Function that returns the test link
// If there is no test, return an empty string
const rendertestLink = test => {
if (!test) {
  return '';
} else {
  return '- [Tests](#tests)'
}
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({ title, description, installation, usage, contribution, test, license, github, email }) => {
  return `# ${title} 

${renderLicenseBadge(license)}

## Description

${description}

## Table of Contents

${renderinstallationLink(installation)}
${renderusageLink(usage)}
${renderLicenseLink(license)}
${rendercontributionLink(contribution)}
${rendertestLink(test)}
- [Questions](#questions)

${renderinstallationSection(installation)}

${renderusageSection(usage)}

${renderLicenseSection(license)}

${rendercontributionSection(contribution)}

${rendertestSection(test)}

## Questions

If you have more question you can find more info on my github:

[GitHub](https://github.com/${github})

or contact me directly via email.
[Contact Me](mailto:${email})
`
}

module.exports = generateMarkdown;
