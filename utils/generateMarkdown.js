const fs = require("fs");

// function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.userTitle}

## Description
${data.userDescription}

![${data.userTitle}](./assets/images/demo.gif?raw=true)

## Table of Contents
  
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Contact](#contact)
* [License](#license)
  
## Installation
${data.userInstallation}

## Usage
${data.userUsage}

## Contributing
${data.userContribution}

## Tests
${data.userTest}

## Contact
Please contact ${data.name} for any additional information
Github Username: ${data.userName}
Email: ${data.userEmail}

## License
${data.userLicense}

## Badge`;
}

module.exports = generateMarkdown;

