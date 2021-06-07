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

module.exports = {getRoles};
