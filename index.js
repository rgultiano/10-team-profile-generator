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
                <h2>${employee.getName()}</h2>
                <ul>
                    <li>ID: ${employee.getId()}</li>
                    <li>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                    ${(role == 'Manager' ? `<li>Office number: ${employee.getOfficeNumber()}</li>` :'')}
                    ${(role == 'Engineer' ? `<li>Github: <a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a></li>` :'')}
                    ${(role == 'Intern' ? `<li>School: ${employee.getSchool()}</li>` :'')}
                </ul>
            </div>`
    })

    // gnereate html body
    let html = `
<html>
    <head>
    </head>
    <body>
        <h1>MyTeam</h1>
        <section>
            ${employee_html_snippet}
        </section>
    </body>
</html>`

    return html;
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

