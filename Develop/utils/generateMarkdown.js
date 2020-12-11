const fs = require("fs");

// function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.userTitle}
  ## Description
  ${data.userDescription}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  ## Installation
  ${data.userInstallation}
  ## Usage
  ${data.userUsage}
  ## License
  ${data.userLicense}
  ## Contributing
  ${data.userContribution}
  ## Tests
  ${data.userTest}
`;
}

module.exports = generateMarkdown;

