const db = require('./connection');

const getRoles = () => {
    const sql = `SELECT * FROM role`;

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

const getRolesForUser = () => {
    const sql = `SELECT role.title, role.salary, department.name AS department
    FROM role
    LEFT JOIN department ON role.department_id = department.id`;

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

const addRole = newRole => {
    const sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`
    const params = [newRole.title, newRole.salary, newRole.department];

    return new Promise((resolve, reject) => {

        db.query(sql, params, (err, result) => {
            if (err) {
                reject(err);

                return;
            }
            resolve({ title: newRole.title });
        });
    });
};

module.exports = { getRoles, getRolesForUser, addRole };

/*
SELECT role.title, role.salary, department.name AS department
FROM role
LEFT JOIN department ON role.department_id = department.id
*/