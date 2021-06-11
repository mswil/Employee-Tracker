const db = require('./connection');

const getEmployees = () => {
    const sql = `SELECT * FROM employee`;

    return new Promise((resolve, reject) => {

        db.query(sql, (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(rows);
        });
    });
};

const addEmployee = newEmployee => {
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`
    const params = [newEmployee.firstName, newEmployee.lastName, newEmployee.role, newEmployee.manager];

    return new Promise((resolve, reject) => {

        db.query(sql, params, (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                name: newEmployee.firstName + ' ' + newEmployee.lastName
            });
        });
    })
};

const updateEmployeeRole = (employeeID, newRoleId) => {
    const sql = `UPDATE employee SET role_id = ?  WHERE id = ?`;
    const params = [newRoleId, employeeID];

    return new Promise((resolve, reject) => {

        db.query(sql, params, (err, result) => {
            if (err) {
                reject(err);

                return;
            }
            resolve(result);
        });
    })
}

module.exports = { getEmployees, addEmployee, updateEmployeeRole };
