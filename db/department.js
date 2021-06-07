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

module.exports = {getDepartments};