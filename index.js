const generateHtml = require('./src/generateHtml');
const inquirer = require('inquirer');
const fs = require('fs');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const employees = [];

const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the manager's name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the manager's ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ('Please enter an office number!')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        employees.push(manager); 
        console.log(manager); 
    })
};

const addPerson = () => {
   return inquirer.prompt([
       {
        type: 'input',
        message: 'enter new person name',
        name: 'name',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Enter a new person');
                return false;
            }
        }
    },
{
    type: 'list',
    message: 'Select role',
    choices: ['Engineer', 'Intern',],
    name: 'role',
    validate: nameInput => {
        if (nameInput){
            return true;
        } else {
            console.log('Must select role');
            return false;
        }
    }
},
{
    type: 'Input',
    message: 'Id number?',
    name: 'Id',
    validate: nameInput => {
        if (nameInput){
            return true;
        } else {
            console.log('Please enter Id number');
            return false;
        }
    }
},
{
    type: 'Input',
    message: 'Email address?',
    name: 'email',
    validate: nameInput => {
        if (nameInput){
            return true;
        } else {
            console.log('Please provide email address');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'school',
    message: 'Please enter school',
    when: (input) => input.role === 'Intern',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('please enter school');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'github',
    message: 'What is Github username',
    when: (input) => input.role === 'Engineer',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('please enter Github username');
            return false;
        }
    }
},
{
    type: 'confirm',
    name: 'morePeople',
    message: 'Would you like to add more people?',
    default: false
}
])
.then(employeeData => {

    let { name, id, email, role, github, school, morePeople } = employeeData; 
    let employee; 

    if (role === "Engineer") {
        employee = new Engineer (name, id, email, github);

        console.log('Engineer add Success');

    } else if (role === "Intern") {
        employee = new Intern (name, id, email, school);

        console.log('Intern add success');
    }

         employees.push(employee);
         
         if (morePeople) {
             return addPerson(employees);
         } else {
             return employees;
         }
        })
    };

    const writeFile = data => {
        fs.writeFile('./dist/index.html', data, err => {
            if (err) {
                console.log(err);
                return;
            }else {
                console.log('Team profile successfully created!')
            }
        })
    };

    addManager()
    .then(addPerson)
    .then(employees => {
        return generateHtml(employees);
    })
    .then(pageHtml => {
        return writeFile(pageHtml);
    })
    .catch(err => {
        console.log(err);
    });


