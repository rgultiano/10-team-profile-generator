# 10-team-profile-generator

## Table of Contents
* [General info](#general-info)
* [Recording](#screenshot)
* [Technologies](#technologies)
* [Setup](#setup)
* [User Story](#User-Story)
* [Acceptance Criteria](#Acceptance-Criteria)

## General Info
A Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.

A sample page of this can be found on Github pages here: https://rgultiano.github.io/10-team-profile-generator/dist/output.html

## Recording
Recording of the generator working can be found here: https://drive.google.com/file/d/1wmhW9vrPY2ktXptgQJ7QpCNP_-0U99XZ/view

## Technologies
Project is created with:
* Nodejs
* Enquirer
* HTML 5
* CSS

## Setup
To setup the dependencies required for this project, copy the contents and run `npm install` in the root directory.

Once setup, to run the project run `npm start`.

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```