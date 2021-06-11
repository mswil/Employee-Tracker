const inquirer = require('inquirer');
const db = require('./db/connection');
const { getDepartments, addDepartment } = require('./db/department');
const { getRoles, addRole } = require('./db/role');
const { getEmployees, addEmployee, updateEmployeeRole } = require('./db/employee');


const startScreenPrompt = [
    {
        type: 'list',
        name: 'screen',
        message: 'What would you like to do?',
        choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role']
    }
];

const newDepartmentPrompt = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the new department?'
    }
];

const newRolePrompt = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the new role?'
    },
    {
        type: 'number',
        name: 'salary',
        message: 'What is the new role\'s salary?'
    },
    {
        type: 'list',
        name: 'department',
        message: 'Please select a department for this role:',
        choices: []
    }
];

const newEmployeePrompt = [
    {
        type: 'input',
        name: 'firstName',
        message: 'Please enter the new employee\'s first name:'
    },
    {
        type: 'input',
        name: 'lastName',
        message: 'Please enter the new employee\'s last name:'
    },
    {
        type: 'list',
        name: 'role',
        message: 'Please select a role for this employee:',
        choices: []
    },
    {
        type: 'confirm',
        name: 'hasManager',
        message: 'Will this employee have a manager?'
    }
]

const assignManagerPrompt = [
    {
        type: 'list',
        name: 'manager',
        message: 'Please select a manager for this employee:',
        choices: []
    }
]

const startApp = () => {

    //setup db connection
    db.connect(err => {
        if (err) throw err;
        console.log(
            `
 ______                 _                       
|  ____|               | |                      
| |__   _ __ ___  _ __ | | ___  _   _  ___  ___ 
|  __| | '_ ' _ \\| '_ \\| |/ _ \\| | | |/ _ \\/ _ \\
| |____| | | | | | |_) | | (_) | |_| |  __/  __/
|______|_| |_| |_| .__/|_|\\___/ \\__, |\\___|\\___|
                 | |             __/ |          
                 |_|            |___/           


 __  __                                   
|  \\/  |                                  
| \\  / | __ _ _ __   __ _  __ _  ___ _ __ 
| |\\/| |/ _' | '_ \\ / _' |/ _' |/ _ \\ '__|
| |  | | (_| | | | | (_| | (_| |  __/ |   
|_|  |_|\\__,_|_| |_|\\__,_|\\__, |\\___|_|   
                           __/ |          
                          |___/           
                
`
        );
        goToStart();
    });
}

const goToStart = () => {
    inquirer.prompt(startScreenPrompt)
        .then(result => selectScreen(result.screen));
};

const inputNewDepartment = () => {
    return inquirer.prompt(newDepartmentPrompt)
        .then(result => addDepartment(result.name));
};

const inputNewRole = () => {
    return getDepartments()
        .then(departments => {
            newRolePrompt[2].choices = departments.map(department => {
                return {
                    name: department.name,
                    value: department.id
                };
            });
            return inquirer.prompt(newRolePrompt)
                .then(result => addRole(result));
        });
}

const inputNewEmployee = () => {
    return getRoles()
        .then(roles => {
            newEmployeePrompt[2].choices = roles.map(role => {
                return {
                    name: role.title,
                    value: role.id
                };
            });
            return inquirer.prompt(newEmployeePrompt)
                .then(result => {
                    if (!result.hasManager) {
                        result.manager = null;
                        return addEmployee(result);
                    }
                    else {
                        return getEmployees()
                            .then(employees => {
                                assignManagerPrompt[0].choices = employees.map(employee => {
                                    return {
                                        name: employee.first_name + " " + employee.last_name,
                                        value: employee.id
                                    };
                                });
                                return inquirer.prompt(assignManagerPrompt)
                                    .then(manager => {
                                        result.manager = manager.manager;
                                        return addEmployee(result);
                                    })
                            })
                    }
                });
        })
}

const selectScreen = screen => {
    console.log(screen);
    switch (screen) {
        case 'View All Departments':
            getDepartments()
                .then(departments => {
                    // format
                    console.log(departments);
                    goToStart();
                });
            break;
        case 'View All Roles':
            getRoles()
                .then(roles => {
                    // format
                    console.log(roles);
                    goToStart();
                });
            break;
        case 'View All Employees':
            getEmployees()
                .then(employees => {
                    // format
                    console.log(employees);
                    goToStart();
                });
            break;
        case 'Add a Department':
            inputNewDepartment()
                .then(result => {
                    console.log(`"${result.name}" department added`);
                    goToStart();
                })
            break;
        case 'Add a Role':
            inputNewRole()
                .then(result => {
                    console.log(`"${result.title}" role added`);
                    goToStart();
                })
            break;
        case 'Add an Employee':
            inputNewEmployee()
                .then(result => {
                    console.log(`${result.name} added to employees`)
                    goToStart();
                })
            break;
        case 'Update an Employee Role':
            //select employee from list
            //update role from list
            goToStart();
            break;
        default:
    }
}

startApp();
