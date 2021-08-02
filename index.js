const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

async function init(){
    const employeeList = [];
    // request manager details
    employeeList.push(await generateEmployee('Manager'));

    // loop through and request Employee Details
    let finish = false;
    while(!finish){
        let response = await inquirer.prompt([{
            type: 'list',
            message: 'Choose a License:',
            name: 'choice',
            choices: ['Engineer', 'Intern', ['No more Employees (Finish Generation)', 'End']],
          }]);
        
        if(response.choice === 'End'){
                finish = true;
        } else {
            employeeList.push(generateEmployee(response.choice));
        }
    }

    //generate HTML from employee list
    generateHtml(employeeList);
}

function generateHtml(employees){
    //TO DO: Generate the HTML
    let html = ``

    return html;
}

async function generateEmployee(type){
    console.log(`Please enter the following details about the ${type}`);
    // employee questions
    const questions = [
        {
        type: 'input',
        message: 'Name:',
        name: 'Name',
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

