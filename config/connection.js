var mysql = require("mysql");

require('dotenv').config();

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "password",
        database: "burgers_db",
        // socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
    });
}



connection.connect();

module.exports = connection;
