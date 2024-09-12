// const answers = require("inquirer/lib/prompts/input");
// const checkbox = require("inquirer/lib/prompts/checkbox");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "Apache License v2.0") {
  return `[![Apache License v2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license == "MIT License") {
  return `[![MIT License](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)`;
  } else if (license == 'GNU General Public License v3.0') {
    return `[![GNU General Public License v3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "Apache License v2.0") {
    return `[Apache License v2.0 Link](https://opensource.org/license/apache-2-0)`;
    } else if (license == "MIT License") {
    return `[MIT License Link](https://opensource.org/license/MIT)`;
    } else if (license == 'GNU General Public License v3.0') {
      return `[GNU General Public License v3.0 Link](https://opensource.org/license/gpl-3-0)`;
    } else return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `This application is covered under ${license}`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.projectTitle}
  ${renderLicenseBadge(answers.license)}

  ## Description
  ${answers.projectDescription}

  ## Table of Contents 
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Features](#features)
  * [How to Contribute](#how-to-contribute)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Credits
  ${answers.credits}

  ## License
  ${renderLicenseSection(answers.license)}
  ${renderLicenseLink(answers.license)}

  ## Features
  ${answers.features}

  ## How to Contribute
  ${answers.contribute}

  ## Tests
  ${answers.tests}

  ## Questions
  My GitHub username: ${answers.username} \n
  My GitHub profile: https://github.com/${answers.username} \n
  For additional questions, contact me at: ${answers.email}`;
}

module.exports = generateMarkdown;
