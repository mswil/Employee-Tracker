const db = require('./connection');

const getDepartments = () => {
    const sql = `SELECT * FROM department`;

    db.query(sql, (err, rows) => {
        if (err) {
            console.error(err.message);
            return;
        }
        return rows;
    });
};

const addDepartment = newDepartment => {
    const sql = `INSERT INTO department (name) VALUES (?)`

    db.query(sql , newDepartment, (err, result) => {
        if (err) {
            console.error(err.message);
            return;
        }
        return result;
    });
};

module.exports = {getDepartments, addDepartment};
