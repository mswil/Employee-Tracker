const inquirer = require('inquirer');
const db = require('./db/connection');


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

        inquirer.prompt(startScreenPrompt)
        .then(selectScreen)
    });
}

const selectScreen = screen => {
    switch (screen) {
        case 'View All Departments':
            break;
        case 'View All Roles':
            break;
        case 'View All Employees':
            break;
        case 'Add a Department':
            break;
        case 'Add a Role':
            break;
        case 'Add an Employee':
            break;
        case 'Update an Employee Role':
            break;
        default:
    }
}

startApp();