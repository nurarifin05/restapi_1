var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "enter_password_here",
    database: "rfid_reader"
});
con.connect(function(err){
    if(err) throw err;
});
module.exports = con;