const db = require('./connection');

const getEmployees = () => {
    const sql = `SELECT * FROM employee`;

    db.query(sql, (err, rows) => {
        if (err) {
            console.error(err.message);
            return;
        }
        return rows;
    });
};

const addEmployee = newEmployee => {
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`
    const params = [newEmployee.first_name, newEmployee.last_name, newEmployee.role_id, newEmployee.manager_id];

    db.query(sql, params, (err, result) => {
        if (err) {
            console.error(err.message);
            return;
        }
        return result;
    });
};

module.exports = { getEmployees, addEmployee };
