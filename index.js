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


const selectScreen = screen => {
    console.log(screen);
    switch (screen) {
        case 'View All Departments':
            getDepartments()
                .then(result => {
                    console.log(result);
                    goToStart();
                }
                );
            break;
        case 'View All Roles':
            //show roles
            goToStart();
            break;
        case 'View All Employees':
            //show employees
            goToStart();
            break;
        case 'Add a Department':
            //enter name
            goToStart();
            break;
        case 'Add a Role':
            //enter name
            //enter salary
            //select department from list
            goToStart();
            break;
        case 'Add an Employee':
            //enter first_name
            //enter last_name
            //select role from list
            //select manager from list
            goToStart();
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