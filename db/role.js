const db = require('./connection');

const getRoles = () => {
    const sql = `SELECT * FROM role`;

    db.query(sql, (err, rows) => {
        if (err) {
            console.error(err.message);
            return;
        }
        return rows;
    });
};

const addRole = newRole => {
    const sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`
    const params = [newRole.title, newRole.salary, newRole.department_id];

    db.query(sql , params, (err, result) => {
        if (err) {
            console.error(err.message);
            return;
        }
        return result;
    });
};

module.exports = {getRoles, addRole};
