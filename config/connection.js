// Set up MySQL connection.
var mysql = require("mysql");

//heroku connection
var connection = mysql.createConnection({
  host: process.env.HOST,
  port: 3306,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "1Redsql",
//   database: "burger_db"
// });


// if (process.env.JAWSDB_URL) {
//   var connection = mysql.createConnection(JAWSDB_URL);
// } else {
//   var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "1Redsql",
//     database: "burger_db"
//   });
// }

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
