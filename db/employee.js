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
module.exports = {getEmployees};
