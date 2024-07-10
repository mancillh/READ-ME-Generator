// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');

// TODO: Create an array of questions for user input
// const questions = [];
const generateREADME = ({ projectTitle, projectDescription, TOC, installation, usage, credits, license, badges, features, contribute, tests }) =>
`# ${projectTitle}

## Description
${projectDescription}

## Table of Contents (Optional)
${TOC}

## Installation
${installation}

## Usage
${usage}

## Credits
${credits}

## License
${license}

## Badges
${badges}

## Features
${features}

## How to Contribute
${contribute}

## Tests
${tests}
`;

  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter project title.",
        name: "projectTitle",
      }, {
        type: "input",
        message: "Enter project description.",
        name: "projectDescription",
      }, {
        type: "input",
        message: "Enter Table of Contents. This section is optional.",
        name: "TOC",
      }, {
        type: "input",
        message: "Enter steps for installation.",
        name: "installation",
      }, {
        type: "input",
        message: "Provide instructions and examples for use. Remember to come back and add a screenshot and URL of your deployed application to this section once your READ ME has been generated",
        name: "usage",
      }, {
        type: "input",
        message: "List your collaborators, if any, with links to their GitHub profiles.",
        name: "credits",
      }, {
        type: "input",
        message: "Enter license. If you need help choosing a license, refer to https://choosealicense.com/.",
        name: "license",
      }, {
        type: "input",
        message: "List badges (optional)",
        name: "badges",
      }, {
        type: "input",
        message: "List features (optional)",
        name: "features",
      }, {
        type: "input",
        message: "List guidelines for how other developers can contribute (optional)",
        name: "contribute",
      }, {
        type: "input",
        message: "Provide examples on how to run tests (optional)",
        name: "tests",
      }
    ])

    // TODO: Create a function to write README file
    .then((answers) => {
      const READMEContent = generateREADME(answers);

      fs.writeFile('README.md', READMEContent, (err) => {
        err ? console.log(err) : console.log("Successfully created READ ME!");
      }
      );
    });

// TODO: Create a function to initialize app
// function init() {
//   console.log('Initializing...');
// }

// Function call to initialize app
// init();
