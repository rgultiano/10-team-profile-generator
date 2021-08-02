const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

init();

async function init(){
    const employeeList = [];
    // request manager details
    employeeList.push(await generateEmployee('Manager'));

    // loop through and request Employee Details
    let finish = false;
    while(!finish){
        let response = await inquirer.prompt([{
            type: 'list',
            message: 'Add an employee:',
            name: 'choice',
            choices: ['Engineer', 'Intern', {value: 'End', name: 'No more Employees (Finish Generation)'}],
          }]);
        
        if(response.choice === 'End'){
                finish = true;
        } else {
            employeeList.push(await generateEmployee(response.choice));
        }
    }

    //generate HTML from employee list
    writeToFile('./dist/output.html',generateHtml(employeeList));
    writeToFile('./dist/style.css',generateCSS());
}

//function to write to file
function writeToFile(fileName, data) {
    console.log(data);
    fs.writeFile(fileName, data, function(err, result) {
        if(err) console.log('error', err);
      });
}

// function to generate html string
function generateHtml(employees){
    //TO DO: Generate the HTML
    let employee_html_snippet = '';
    //generate html snippets for all employeets
    employees.forEach(employee=>{
        let role = employee.getRole();
        employee_html_snippet += `
            <div class="employee">
                <div class="employee-header">
                    <h2>${employee.getName()}</h2>
                    <h3>${role}</h3>
                </div>
                <ul>
                    <li><span class="prop">ID:</span> ${employee.getId()}</li>
                    <li><span class="prop">Email:</span> <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                    ${(role == 'Manager' ? `<li><span class="prop">Office number:</span> ${employee.getOfficeNumber()}</li>` :'')}
                    ${(role == 'Engineer' ? `<li><span class="prop">Github:</span> <a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a></li>` :'')}
                    ${(role == 'Intern' ? `<li><span class="prop">School:</span> ${employee.getSchool()}</li>` :'')}
                </ul>
            </div>`
    })

    // gnereate html body
    let html = `
<html>
    <head>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>My Team</h1>
        <section class="employees">
            ${employee_html_snippet}
        </section>
    </body>
</html>`

    return html;
}

function generateCSS(){
    return `body{
    background-color: lightblue;
    margin: 0;
}

h1{
    text-align: center;
    background-color: darkred;
    color: white;
    padding-bottom: .5em;
    padding-top: .5em;
}
.employees{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.employee {
    flex: 0 0 30%;
    margin-bottom: 1em;
    border: 1px solid black;
    border-radius: .5em;
    box-shadow: 3px 2px grey;
    background-color: rgb(245, 241, 241);
}

.employee h2,h3{
    margin: 0;
}

.employee-header{
    text-align: center;
    border-bottom: 1px solid black;
    background-color: blue;
    color:white;
}

.employee ul{
    list-style: none;
    padding-left: 1em;
    padding-right: 1em;
}

.employee li{
    padding: .1em;
    margin: 0;
    padding-top: .2em;
    border: 1px solid lightgrey;
    border-bottom: none;
    background-color: white;
}

.employee li:last-child{
    border-bottom: 1px solid lightgrey ;
}

.prop{
    font-weight: bold;
}`;
}

async function generateEmployee(type){
    console.log(`Please enter the following details about the ${type}`);
    // employee questions
    const questions = [
        {
        type: 'input',
        message: 'Name:',
        name: 'name',
        },
        {
        type: 'input',
        message: 'Employee ID:',
        name: 'id',
        },
        {
        type: 'input',
        message: 'Email:',
        name: 'email',
        }
    ]
    
    switch(type){
        case 'Manager':
            // Manager questions
            questions.push(        
                {
                    type: 'input',
                    message: 'Office Number:',
                    name: 'officeNumber',
                });
            response = await inquirer.prompt(questions);
            return new Manager(response.name, response.id, response.email, response.officeNumber);
        case 'Engineer':
            // Engineer questions
            questions.push(        
                {
                    type: 'input',
                    message: 'Github:',
                    name: 'github',
                });
            response = await inquirer.prompt(questions);
            return new Engineer(response.name, response.id, response.email, response.github);
        case 'Intern':
            // Intern questions
            questions.push(        
                {
                    type: 'input',
                    message: 'School:',
                    name: 'officeNumber',
                });
            response = await inquirer.prompt(questions);
            return new Intern(response.name, response.id, response.email, response.officeNumber);
        default:
            response = await inquirer.prompt(questions);
            return new Employee(response.name, response.id, response.email, response.officeNumber);
    }
}

