// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let badgeForLicense = "";

function renderLicenseBadge(data) {

  if (data.license === "mit") {
    badgeForLicense = `## License
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
    renderLicenseLink(data)
    return badgeForLicense;
  }
  if (data.license=== "Apache") {
    licenseBadge =
      `## License
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
      return badgeForLicense;
  }
  if (data.license === "Boost") {
    badgeForLicense =
      `## License
[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`;
      return badgeForLicense;
  }
  if (data.license === "best") {
    badgeForLicense =
      `## License
[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`;
      return badgeForLicense;
  } if (data.license === 'None') {
    return badgeForLicense;
  }
}

// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license === "mit") {
    badgeForLicense = badgeForLicense.concat("(https://opensource.org/licenses/MIT)")
  }
  if (data.license === "Apache") {
    badgeForLicense = badgeForLicense.concat("(https://opensource.org/licenses/Apache-2.0)")
  }
  if (data.license === "Boost") {
    badgeForLicense = badgeForLicense.concat("(https://www.boost.org/LICENSE_1_0.txt")
  }
  if (data.license === "best") {
    badgeForLicense = badgeForLicense.concat("(https://opensource.org/licenses/BSD-3-Clause)")
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data){
if (data.license === "None") {
  return ''
} else {
  return `- [License](#license)`
}
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## table of content
  - [project description](#description)
  - [questions](#questions)
  ${renderLicenseSection(data)}
  ## Description
  ${data.description}

  ${renderLicenseBadge(data)}
  ## Questions
  Email: ${data.email}
  GitHub: https://github.com/${data.github}
  ${data.app}
`;
}

module.exports = generateMarkdown;
