// const answers = require("inquirer/lib/prompts/input");
// const checkbox = require("inquirer/lib/prompts/checkbox");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
  return `https://img.shields.io/badge/License-${license}-yellow.svg`
  } return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
  return `\n* [License](#license)\n`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return ` ## License
    
      Licensed under the ${license} license`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.projectTitle}

  ## Description
  ${answers.projectDescription}

  ## Table of Contents (Optional)
  ${answers.TOC}

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Credits
  ${answers.credits}

  ## License
  ${checkbox.license}

  ## Features
  ${answers.features}

  ## How to Contribute
  ${answers.contribute}

  ## Tests
  ${answers.tests}`;
}

renderLicenseSection();

module.exports = generateMarkdown;
