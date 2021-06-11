const db = require('./connection');

const getDepartments = () => {
    const sql = `SELECT * FROM department`;

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

const addDepartment = newDepartment => {
    const sql = `INSERT INTO department (name) VALUES (?)`

    return new Promise((resolve, reject) => {

        db.query(sql, newDepartment, (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve({ name: newDepartment });
        });
    })
};

module.exports = { getDepartments, addDepartment };
