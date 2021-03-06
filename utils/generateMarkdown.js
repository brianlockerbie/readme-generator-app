// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function listOfContents(license) {
  if(license === "None") {
    return `
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contribution](#contribution)
  4. [Tests](#tests)
  5. [License](#license)
  `
  }

  return `
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contributing](#contributing)
  4. [Tests](#tests)
  5. [License](#license)
  6. [Questions](#questions)
  `
}

function renderLicenseBadge(license) {
  if(license === "None") {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `https://opensource.org/licenses/${license}`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "None") {
    return '';
  }

  return `
  <a name="license"></a>
  
  ## License
  This repository is licensed with the ${license} License - read the license info for more.
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

const { title, description, installation, usage, license, ...questions } = data;

  return `# ${title}

  ## Description
  ${description}
  <br/>
  ${renderLicenseBadge(license)}

  ## List of Contents
  ${listOfContents(license)}

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ${renderLicenseSection(license)}

  ## Contributing

  ## Tests

  ## Questions

  [GitHub](https://github.com/${questions.github})
  For questions, send an email to [${questions.email}](mailto:${questions.email})


`;
}

module.exports = generateMarkdown;
