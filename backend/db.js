const mysql = require('mysql');
const dbconfig = {
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'interviewtest',
};
const connection = mysql.createPool(dbconfig);
connection.getConnection((err) => {
    if (err) {
        console.error("Error connecting to the database:", err.message);
        return;
    }
    console.log("Database connected successfully!");
});

module.exports = connection;
